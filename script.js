const app = new Vue({
  el: '#app',
  data: {
    Posts: [],
    Thread: "Redtweet",
    newPost: ""
  },
  methods: {
    addPost: function () {
      db.collection("Posts").add({
        Thread: this.Thread,
        Text: this.newPost
      })
      let Posty = []
      db.collection("Posts").where("Thread", "==", this.Thread)
        .get()
        .then(function (querySnapshot) {
          querySnapshot.forEach(function (doc) {
            Posty.push(doc.data().Text)
            console.log(doc.data().Text);
          });
        })
        .catch(function (error) {
          console.log("Error getting documents: ", error);
        });
      this.Posts = Posty
    },
    searchPosts: function () {
      let Posty = []
      db.collection("Posts").where("Thread", "==", this.Thread)
        .get()
        .then(function (querySnapshot) {
          querySnapshot.forEach(function (doc) {
            Posty.push(doc.data().Text)
            console.log(doc.data().Text);
          });
        })
        .catch(function (error) {
          console.log("Error getting documents: ", error);
        });
      this.Posts = Posty
    }
  }
});
