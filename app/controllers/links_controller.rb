class LinksController < ApplicationController
  # before_action :authenticate_user!

  def index
    @links = Link.where(user_id: current_user.id)
  end
end
