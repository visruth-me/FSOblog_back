const dummy = () => {
  return 1
}

const totalLikes = (blogs) => {
  let total = 0
  for (let blog of blogs)
    total += blog.likes || 0
  return total
}

const favoriteBlog = (blogs) => {
  if(blogs.length === 0)
    return null

  let favorite = blogs[0]
  for(let blog of blogs) {
    if(blog.likes > favorite.likes)
      favorite = blog
  }
  return favorite
}

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog
}