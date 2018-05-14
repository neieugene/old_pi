class StaticPagesController < ApiController
  skip_before_action :authenticate_user!

  def index
    @static_pages = StaticPage.all
  end

  def show
    @static_page = StaticPage.find_by(slug: params[:id])
    authorize @static_page
  end

end