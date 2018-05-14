class ArticlesController < ApiController
  before_action :set_article, only: [:show, :update, :destroy]

  def index
    @articles = policy_scope(Article)
  end

  def create
    @article = Article.new(article_params)

    authorize @article

    if @article.save
      render :show, status: :created, location: @article
    else
      render json: @article.errors, status: :unprocessable_entity
    end
  end

  def update
    if @article.update(article_params)
      render :show
    else
      render json: @article.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @article.destroy
  end

  private

  def set_article
    @article = Article.find(params[:id])
    authorize @article
  end

  def article_params
    params.require(:article).permit(:name, :description, :annotation, :content)
  end
end
