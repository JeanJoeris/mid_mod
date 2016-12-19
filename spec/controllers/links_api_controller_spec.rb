require 'rails_helper'

RSpec.describe Api::V1::LinksController do
  it "allows creation of links" do
    @request.env["devise.mapping"] = Devise.mappings[:user]
    user = FactoryGirl.create(:user)
    sign_in user
    link = {title: "foobar", url: "http://foobar.com"}
    post :create, link
    response_link = JSON.parse(response.body, symbolize_names: true)

    expect(response.status).to eq(201)
    expect(response_link[:title]).to eq(link[:title])
    expect(response_link[:url]).to eq(link[:url])
  end
end
