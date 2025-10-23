import  postDao from '@venkat-clone/post-dao';

class PostService {
    // Create a new post with some basic validation
    async createPost(data) {
        if (!data.title) {
            throw new Error('Title is required');
        }
        // You can add more business logic here

        return await postDao.createPost(data);
    }

    // Fetch a post by ID and handle not found case
    async getPostById(id) {
        const post = await postDao.getPostById(id);
        if (!post) {
            throw new Error(`Post with id ${id} not found`);
        }
        return post;
    }

    // Fetch all posts (could add filters, pagination here)
    async getAllPosts() {
        return await postDao.getAllPosts();
    }

    // Update a post, ensuring it exists first
    async updatePost(id, data) {
        const existingPost = await postDao.getPostById(id);
        if (!existingPost) {
            throw new Error(`Post with id ${id} not found`);
        }
        return await postDao.updatePost(id, data);
    }

    // Delete a post by ID
    async deletePost(id) {
        const existingPost = await postDao.getPostById(id);
        if (!existingPost) {
            throw new Error(`Post with id ${id} not found`);
        }
        return await postDao.deletePost(id);
    }
}

const postService = new PostService()
export default postService;
