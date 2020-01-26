<template>
    <q-page>
       <div class="row justify-center q-pt-md">
           <div class="col-md-6 col-xs-26">
                <q-card class="my-card">
                <q-card-section>
                    <div class="text-h4 q-pb-md"><center> INPUT DATA MENU </center></div>
                    <q-form
      @submit="onSubmit"
      class="q-gutter-sm"
    >
    <q-input
        filled
        type="text"
        v-model="kodeminuman"
        label= "Masukkan Kode Minuman"
        lazy-rules
        :rules="[ val => val !== null && val !== '' || 'Wajib disi']"
      />

       <q-input
        filled
        type="text"
        v-model="namaminuman"
        label= "Masukkan Nama Minuman "
        lazy-rules
        :rules="[ val => val !== null && val !== '' || 'Wajib disi']"
      />

      <q-input
        filled
        type="text"
        v-model="hargaminuman"
        label= "Masukkan Harga Minuman "
        lazy-rules
        :rules="[ val => val !== null && val !== '' || 'Wajib disi']"
      />

      <div>
        <q-btn label="SIMPAN" type="submit" color="primary"/>
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
      kodeminuman: '',
      namaminuman: '',
      hargaminuman: ''
    }
  },
  methods: {
    onSubmit () {
      this.$axios.post('minuman/postminuman', {
        kodeminuman: this.kodeminuman,
        namaminuman: this.namaminuman,
        hargaminuman: this.hargaminuman
      }).then(res => {
        if (res.data.error) {
          this.showNotif(res.data.pesan, 'negative')
        } else {
          this.showNotif(res.data.pesan, 'negative')
          this.$router.push('/inputminuman')
        }
        this.kodeminuman = ''
        this.namaminuman = ''
        this.hargaminuman = ''
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
