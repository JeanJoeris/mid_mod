require 'rails_helper'

RSpec.describe Api::V1::LinksController do
  before :each do
    @request.env["devise.mapping"] = Devise.mappings[:user]
    user = FactoryGirl.create(:user)
    sign_in user
  end

  it "allows creation of links" do
    link = {title: "foobar", url: "http://foobar.com"}
    post :create, link: link
    response_link = JSON.parse(response.body, symbolize_names: true)

    expect(response.status).to eq(201)
    expect(response_link[:title]).to eq(link[:title])
    expect(response_link[:url]).to eq(link[:url])
  end

  it "allows editing of links" do
    link = Link.create(title: "foobar", url: "http://foobar.com")
    edited_link = {title: "barbiz", url: "http://foobar.com"}

    put :update, id: link.id, link: edited_link
    response_link = JSON.parse(response.body, symbolize_names: true)

    expect(response.status).to eq(201)
    expect(response_link[:title]).to eq(edited_link[:title])
  end
end
