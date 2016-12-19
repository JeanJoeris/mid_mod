require 'rails_helper'

RSpec.describe "user logs in", type: :feature do
  it 'works' do
    visit root_path

    click_on ("sign up")

    click_on ("Sign up")

    expect(current_path).to eq(new_user_registration_path)

    fill_in("user_email", with: "foo@example.com")
    fill_in("user_password", with: "123456")
    fill_in("user_password_confirmation", with: "123456")

    click_on("Sign up")

    expect(page).to have_content("sign out")
  end
end
