class SystemsController < ApplicationController
  before_action :set_system, only: [:update, :destroy]
 
  def create
    if current_user.admin
      @system = System.new(system_params)
      @system.id = system.maximum(:id) + 1
      @system.save
      @systems = System.all
      @system = System.new
      redirect_to admin_path
    else
      redirect_to root_path
    end
  end

  def update
    if current_user.admin
      @system.update(system_params)
      @systems = System.all
      @system = System.new
      redirect_to admin_path
    else
      redirect_to root_path
    end
  end

  def destroy
    if current_user.admin
      begin
          @system.destroy
      rescue
      end
      @systems = System.all
      @system = System.new
      redirect_to admin_path
    else
      redirect_to root_path
    end
  end

  private
  def set_system
    @system = System.find(params[:id])
  end

  def system_params
    params.require(:system).permit(:id, :name, :buoy_id, :lat, :lon)
  end
end
