import adapter from '@sveltejs/adapter-static';

export default {
  kit: {
    adapter: adapter(),
    prerender: {
      handleHttpError: ({ path, referrer, message }) => {
        // Log the error details
        console.error(`Error prerendering ${path} (referrer: ${referrer}): ${message}`);
        // Optionally, you can throw an error to stop the build
        // throw new Error(message);
      }
    }
  }
};