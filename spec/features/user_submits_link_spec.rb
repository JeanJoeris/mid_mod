require 'rails_helper'

RSpec.describe "User submits a link", type: :feature do
  # Skipping this test cause testing js is hard and not a good use of time right now
  pending  "Can't get selenium to work with devise"
  # xit "and sees only their links" do
  #   visit root_path
  #
  #   click_on "sign up"
  #   fill_in("#user_email", with: user.email)
  #   fill_in("#user_password", with: "password")
  #   save_and_open_page
  #   click_on("Log in")
  #
  #   fill_in("link_title", with: "A sweet ass link")
  #   fill_in("link_url", with: "http://www.google.com")
  #
  #   click_on("Submit link")
  #
  #   expect(page).to have_link("A sweet ass link", href: "http://www.google.com")
  # end
end
