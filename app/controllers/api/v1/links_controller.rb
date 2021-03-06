class Api::V1::LinksController < ApplicationController

  def create
    @link = Link.new(link_params.merge(user_id: current_user.id))
    if @link.save
      render json: @link, status: 201
    else
      render json: @link.errors.full_messages, status: 500
    end
  end

  def update
    @link = Link.find(params[:id])
    if @link.update(link_params)
      render json: @link, status: 201
    else
      render json: @link.errors.full_messages, status: 500
    end
  end

  private

  def link_params
    params.require(:link).permit(:title, :url, :id, :read)
  end
end
