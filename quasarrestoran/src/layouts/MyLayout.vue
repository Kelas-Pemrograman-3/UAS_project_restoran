<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="bg-pink text-white">
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          icon="menu"
          class="q-mr-sm"
          aria-label="Menu"
        />

        <q-toolbar-title>
        Deskim Restaurant
        </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-pink"
    >
      <q-list>
        <q-item-label header class="bg-black text-white">MENU</q-item-label>
        <q-item clickable tag="a"  href="/home">
          <q-item-section>
            <q-item-label class=" text-white">Home</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" href="/input">
          <q-item-section>
            <q-item-label class=" text-white">Input data makanan</q-item-label>
          </q-item-section>
        </q-item>
          <q-item clickable tag="a"  href="/datamenu">
          <q-item-section>
            <q-item-label class=" text-white">Data makanan</q-item-label>
             </q-item-section>
        </q-item>
          <q-item clickable tag="a"  href="/inputminuman">
          <q-item-section>
            <q-item-label class=" text-white">Input data minuman</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a"  href="/dataminuman">
          <q-item-section>
            <q-item-label class=" text-white">Data minuman</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a"  href="/transaksi">
          <q-item-section>
            <q-item-label class=" text-white">Transaksi</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a"  href="/">
          <q-item-section>
            <q-item-label class=" text-white">Keluar</q-item-label>
          </q-item-section>
        </q-item>

      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'MyLayout',

  data () {
    return {
      leftDrawerOpen: false
    }
  }
}
</script>
