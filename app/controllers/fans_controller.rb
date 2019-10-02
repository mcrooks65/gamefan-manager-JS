class FansController < ApplicationController
  def new
    @fan = Fan.new
  end

  def create
    @fan = Fan.new(fan_params)
    respond_to do |format|
      if @fan.save
        format.html { redirect_to '/tally', notice: 'Fan was successfully created.' }
      else
        format.html { render :new }
      end
    end
  end

  def show
    @fan = Fan.find(params[:id])
    respond_to do |format|
      format.html {render :show}
      format.json {render json: @fan}
    end
  end

  def index
    @fans = Fan.all
    respond_to do |format|
      format.html {render :index}
      format.json {render json: @fans}
    end
  end

  def edit
  end

  private

  def fan_params
    params.require(:fan).permit(:name, :game_id)
  end

end
