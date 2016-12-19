require 'rails_helper'

RSpec.describe Link, type: :model do
  it "can only have valid urls" do
    valid_url_1 = "http://google.com"
    valid_url_2 = "http://www.google.com"
    valid_url_3 = "https://google.com"
    valid_urls = [valid_url_1, valid_url_2, valid_url_3]
    invalid_url_1 = "google.com"
    invalid_url_2 = "google"
    invalid_url_3 = "fsgsafsd"
    invalid_urls = [invalid_url_1, invalid_url_2, invalid_url_3]

    valid_urls.each do |url|
      expect(Link.new(title: "foo", url: url).valid?).to eq(true)
    end

    invalid_urls.each do |url|
      expect(Link.new(title: "foo", url: url).valid?).to eq(false)
    end
  end
end
