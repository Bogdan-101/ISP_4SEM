import { createSlice } from "@reduxjs/toolkit";

export const ThreadSlice = createSlice({
  name: "threads",
  initialState: {
    threads: [],
    boardId: 0,
    boardName: "",
    boardSlug: '',
  },
  reducers: {
    set_threads: (state, action) => {
      state.threads = action.payload.posts;
      state.boardId = action.payload.id;
      state.boardName = action.payload.name;
      state.boardSlug = action.payload.slug;
    },
    add_comment: (state, action) => {
      const { threadId, content, image } = action.payload;
      state.threads.map((elem) => {
        if (elem.id === threadId) {
          let comment;
          if (elem.comments.length) {
            comment = {
              id: elem.comments[0].id + elem.comments.length + 1,
              content: content,
              image: image ? '/image/' + image : null,
              compressed_image: image ? ('/image/' + image).split('.')[0] + '_compressed.jpg' : null,
              pub_date: (new Date()).toISOString(),
              slug: state.boardSlug + '-' + parseInt(parseInt(elem.comments[elem.comments.length - 1].slug.split('-')[1]) + parseInt(1)),
              is_blessed: false,
              related_thread: threadId,
              related_board: state.boardId,
              owner: elem.owner
            }
          } else {
            comment = {
              id: elem.id + 1,
              content: content,
              image: image ? '/image/' + image : null,
              compressed_image: image ? ('/image/' + image).split('.')[0] + '_compressed.jpg' : null,
              pub_date: (new Date()).toISOString(),
              slug: state.boardSlug + '-' + parseInt(parseInt(elem.slug.split('-')[1]) + parseInt(1)),
              is_blessed: false,
              related_thread: threadId,
              related_board: state.boardId,
              owner: elem.owner
            }
          }
          
          elem.comments.push(comment);
        }
      });
    },
    add_thread: (state, action) => {
      const { boardName, title, content, image } = action.payload;
      let thread = {};
      if (state.threads.length) {
        thread = {
          id: state.threads[0].id + 1,
          comments: [],
          title: title,
          slug: state.boardSlug + '-' + parseInt(parseInt(state.threads[0].slug.split('-')[1]) + parseInt(1)),
          content: content,
          image: image ? '/image/' + image : null,
          compressed_image: image ? ('/image/' + image).split('.')[0] + '_compressed.jpg' : null,
          pub_date: (new Date()).toISOString(),
          in_archive: false,
          is_blessed: false,
          blog_category: state.boardId,
          owner: state.threads[0].owner
        }
      } else {
        thread = {
          id: 1,
          comments: [],
          title: title,
          slug: state.boardSlug + '-1',
          content: content,
          image: image ? '/image/' + image : null,
          compressed_image: image ? ('/image/' + image).split('.')[0] + '_compressed.jpg' : null,
          pub_date: (new Date()).toISOString(),
          in_archive: false,
          is_blessed: false,
          blog_category: state.boardId,
          owner: undefined
        }
      }

      state.threads.unshift(thread);
    },
    bless_thread: (state, action) => {
      const {id, is_blessed} = action.payload;
      state.threads.map((elem) => {
        if (elem.id === id) {
          elem.is_blessed = !is_blessed
        }
      })
    },
    bless_comment: (state, action) => {
      const {id, is_blessed} = action.payload;
      state.threads.map((thread) => {
        thread.comments.map((comment) => {
          if (comment.id === id)
            comment.is_blessed = !is_blessed
        })
      })
    }
  },
},
);

export const { set_threads, add_comment, add_thread, bless_thread, bless_comment } =
  ThreadSlice.actions;

export default ThreadSlice.reducer;
