// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VuePouchDB from 'vue-pouch-db'
import App from './App'
import router from './router'

Vue.config.productionTip = false
Vue.use(VuePouchDB)

const bucket = new VuePouchDB.Bucket({
  // Main config Object. This is the top level
  // config object. Where global config
  // are shared with each database.
  config: {
    // Remote Server
    remote: 'http://127.0.0.1:5984',

    // Is DB Remote Only?, default: false
    remoteOnly: false,

    // db.allDocs({options})
    allDocs: {
      include_docs: true
    },

    // new Pouch({options})
    options: {
      ajax: {
        cache: true
      }
    },

    // Pouch.sync({option}) for every Instance
    sync: {
      since: 0,
      live: true,
      retry: true
    },

    // db.changes({option})
    changes: {
      since: 'now',
      live: true,
      include_docs: true
    },

    // Global onChange events
    // for each database.
    // The functions here are passed to each DB
    // db.changes().on(() => {})
    onChanges (change) {
      console.log('Change: ', change)
    },
    onPaused (error) {
      console.log('Paused', error)
    },
    onActive () {
      console.log('Active')
    },
    onDenied (error) {
      console.log('Denied', error)
    },
    onComplete () {
      console.log('Completed')
    },
    onError (error) {
      console.log('Error', error)
    },
    cancel (cancel) {
      // 'cancel' var is a function to be called
      // when something bad happens. It will
      // Cancel the watch event on CouchDB
    }
  },

  // List of PouchDB plugins
  plugins: [
    // require('pouchdb-plugin')
  ],

  // Actions are shared across the
  // bucket instance.
  // Think of them as helper methods to bundle
  // several sets of commands into a single method.
  // Can be accessed through this.$bucket.[method name]
  actions: {
    addDoc (arg) {
      // this is $bucket instance
      // this.db('configurations')._id('document_id').data({})
    }
  },

// Databases
// You can define / instanciate
// a per database config file.
// this will put the database into the internal
// state and also, you can define custom "options"
// for the database Instance (on: new PouchDB(options))
  _users: {
    // Is remote only ?
    // The _users database lives only
    // in the server, so its only remote
    remoteOnly: true
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  bucket,
  router,
  template: '<App/>',
  components: { App },
  methods: {
    // Simple example how to delete a
    // document in CouchDB through VuePouchDB
    // Keep in mind, that the state is synced
    // and when the request is sent to couchdb
    // the state will update the object and
    // add the property _deleted: true
    remove ({ _id, _rev }) {
      /* this.$bucket.db('configurations').put({
        _id,
        _rev,
        _deleted: true
      }) */
    },
    fetch () {
      /* this.db.allDocs({ include_docs: true })
        .then(r => r.rows)
        .then(list => {
          this.todos = list
          console.log('fetched %d todos', list.length)
        })
        .catch(console.error) */
    }
  },
  created: function () {
  }
})
