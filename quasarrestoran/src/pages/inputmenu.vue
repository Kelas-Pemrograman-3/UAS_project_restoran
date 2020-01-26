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
        v-model="kodemakanan"
        label= "Masukkan Kode Makanan"
        lazy-rules
        :rules="[ val => val !== null && val !== '' || 'Wajib disi']"
      />

       <q-input
        filled
        type="text"
        v-model="namamakanan"
        label= "Masukkan Nama Makanan "
        lazy-rules
        :rules="[ val => val !== null && val !== '' || 'Wajib disi']"
      />

      <q-input
        filled
        type="text"
        v-model="hargamakanan"
        label= "Masukkan Harga Makanan "
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
      kodemakanan: '',
      namamakanan: '',
      hargamakanan: ''
    }
  },
  methods: {
    onSubmit () {
      this.$axios.post('makanan/postmakanan', {
        kodemakanan: this.kodemakanan,
        namamakanan: this.namamakanan,
        hargamakanan: this.hargamakanan
      }).then(res => {
        if (res.data.error) {
          this.showNotif(res.data.pesan, 'negative')
        } else {
          this.showNotif(res.data.pesan, 'positif')
          this.$router.push('/input')
        }
        this.kodemakanan = ''
        this.namamakanan = ''
        this.hargamakanan = ''
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
