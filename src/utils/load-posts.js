export const loadPosts = async () => {
    const postsResponse = fetch('https://jsonplaceholder.typicode.com/posts')
    const fotosResponse = fetch('https://jsonplaceholder.typicode.com/photos')

    const [posts, fotos] = await Promise.all([postsResponse, fotosResponse])

    const postsJson = await posts.json()
    const fotosJson = await fotos.json()

    const postsAndFotos = postsJson.map((posts, index) => {
      return { ...posts, cover: fotosJson[index].url }
    });

    return postsAndFotos
}