class LinksController < ApplicationController
  # before_action :authenticate_user!

  def index
    if user_signed_in?
      @links = Link.where(user_id: current_user.id)
    end
  end
end
