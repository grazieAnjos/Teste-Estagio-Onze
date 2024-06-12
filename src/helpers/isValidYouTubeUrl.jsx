function isValidYouTubeUrl(url) {
    const regex = /http(?:s?):\/\/(?:www\.)?youtu(?:be\.com\/watch\?v=|\.be\/)([\w\-\_]*)(&(amp;)?‌​[\w\?‌​=]*)?/
    return regex.test(url);
  }

export default isValidYouTubeUrl