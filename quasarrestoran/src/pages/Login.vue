<template>
    <q-page>
       <div class="row justify-center q-pt-md">
           <div class="col-md-6 col-xs-26">
                <q-card class="my-card">
                <q-card-section>
                    <div class="text-h4 q-pb-md"><center> LOGIN </center></div>
                    <q-form
      @submit="onSubmit"
      class="q-gutter-sm"
    >
       <q-input
        filled
        type="text"
        v-model="user"
        label= "Masukkan Username Anda "
        lazy-rules
        :rules="[ val => val !== null && val !== '' || 'Wajib disi']"
      />

      <q-input
        filledl
        type="Password"
        v-model="password"
        label="Masukkan Password Anda"
        lazy-rules
        :rules="[ val => val !== null && val !== '' || 'Password Tidak Boleh Kosong']"
        />

      <div>
        <q-btn label="Login" type="submit" color="primary"/>
      </div>
    </q-form>
                </q-card-section>
                </q-card>
           </div>
       </div>
    </q-page>
</template>

<script>
export default {
  data () {
    return {
      user: '',
      password: ''
    }
  },
  methods: {
    onSubmit () {
      this.$axios.post('admin/login', {
        user: this.user,
        password: this.password
      }).then(res => {
        if (res.data.error) {
          this.showNotif(res.data.pesan, 'negative')
        } else {
          this.showNotif(res.data.pesan, 'positif')
          this.$router.push('/home')
        }
        this.user = ''
        this.password = ''
      })
    },
    showNotif (msg, color) {
      this.$q.notify({
        message: msg,
        color: 'color'
      })
    }
  }
}
</script>
