<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div>
      <textarea type="text" v-model="chatmsg"/>
      <button v-on:click="chats.push({message:chatmsg}); addDoc({message:chatmsg})">Add</button>
      <div v-for="chat in chats">
        {{chat.message}}
        <span v-on:click="remove(chat)">x</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'hello',
    dbsetup: {
      name: 'chats',
      options: {'remote': 'http://127.0.0.1:5984'
      }
    },
    data: function () {
      return {
        msg: 'Welcome to mlaxman',
        chatmsg: '',
        chats: []
      }
    },
    methods: {
      // Simple example how to delete a
      // document in CouchDB through VuePouchDB
      // Keep in mind, that the state is synced
      // and when the request is sent to couchdb
      // the state will update the object and
      // add the property _deleted: true
      remove ({_id, _rev}) {
        this.$bucket.db('chats', {
          auth: {
            username: 'raju.np',
            password: 'oleoleole'
          }
        }).put({
          _id,
          _rev,
          _deleted: true
        })
      },
      fetch () {
        this.$bucket.db('chats').allDocs({ include_docs: true })
        .then(r => r.rows)
        .then(list => {
          for (var k in list) {
            this.chats.push(list[k].doc)
            console.log(this.chats)
          }
        })
        .catch(console.error)
      },
      addDoc (arg) {
        this.$bucket.db('chats', {
          auth: {
            username: 'raju.np',
            password: 'oleoleole'
          }
        }).post(arg).then(function (response) {
          // handle response
        }).catch(function (err) {
          console.log(err)
        })
      }
    },
    created: function () {
      this.fetch()
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
