class GamesController < ApplicationController
  def new
    @game = Game.new(developer_id: params[:developer_id])
  end

  def create
    @game = Game.new(game_params)
    respond_to do |format|
      if @game.save
        format.html { redirect_to @game, notice: 'Game was successfully created.' }
      else
        format.html { render :new }
      end
    end
  end

  def show
    @game = Game.find(params[:id])
    respond_to do |format|
      format.html {render :show}
      format.json {render json: @game}
    end
  end

  def index
    if params[:developer_id]
      @games = Developer.find(params[:developer_id]).games
      respond_to do |format|
				format.html {render :index}
				format.json {render json: @games}
			end
    else
      @games = Game.all
      respond_to do |format|
				format.html {render :index}
				format.json {render json: @games}
			end
    end
  end

  private

  def game_params
    params.require(:game).permit(:title, :description, :genre, :price, :developer_id)
  end
end
