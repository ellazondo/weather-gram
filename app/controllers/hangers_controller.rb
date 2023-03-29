class HangersController < ApplicationController
rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

    def index
        hangers = Hanger.all
        render json: hangers
    end

    def show
        hanger = Hanger.find(params[:id])
        render json: hanger

    end

    def create
        new_hanger = Hanger.create!(hanger_params)
        render json: new_hanger, status: :created
    end

    def update
        hanger = Hanger.find(params[:id])
        hanger.update!(hanger_params)
        render json: hanger
    end

    def destroy
        hanger = Hanger.find(params[:id])
        hanger.destroy
        head :no_content
    end

    private

    def hanger_params
        params.permit(:outfit_id, :user_id)
    end

    def render_not_found_response
        render json: {error: "Hanger not found"}, status: :not_found
    end

    def render_unprocessable_entity_response(exception)
        render json: {errors: exception.record.errors.full_messages}, status: :unprocessable_entity
    end
end

        # , each_serializer: HangerOutfitsSerializer,
        # include: ['outfits.top','outfits.bottom','outfits.shoe']
