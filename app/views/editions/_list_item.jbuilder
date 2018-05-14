json.merge! edition.attributes
json.small_avatar edition.avatar.url(:small)
json.authors edition.authors.each do |author|
  json.partial! "authors/show", author: author
end
