json.merge! edition.attributes
json.user_subscribed edition.user_subscribed?(current_user)
json.small_avatar edition.avatar.url(:small)
json.original_avatar edition.avatar.url(:original)
json.articles edition.articles do |article|
  json.partial! "articles/list_item", article: article
end
json.authors edition.authors
