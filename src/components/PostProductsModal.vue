<template>
  <div>
    <DialogModal :finishFn="showEditor">
      <template #modal-btn>
        <slot name="btn-content">按鈕</slot>
      </template>
      <template #modal-header>
        <h2 class="text-xl font-black font-self text-brand-02">
          新增商品/編輯商品
        </h2>
      </template>
      <template #modal-body>
        <div class="flex flex-col-reverse lg:flex-row gap-3">
          <div
            class="flex flex-col gap-3 lg:w-96 lg:h-full h-[75vh] overflow-x-hidden px-3"
          >
            <p class="font-semibold">
              * 封面
              <span class="float-right text-gray-02 font-normal">
                <button
                  type="button"
                  class="mr-2 hover:underline hover:text-gray-01"
                  :class="{
                    'underline text-gray-01': imageStyle === '本地圖片'
                  }"
                  @click="
                    () => {
                      imageStyle = '本地圖片'
                    }
                  "
                >
                  本地圖片
                </button>
                <button
                  type="button"
                  class="hover:underline hover:text-gray-01"
                  :class="{
                    'underline text-gray-01': imageStyle === '雲端圖片'
                  }"
                  @click="() => (imageStyle = '雲端圖片')"
                >
                  雲端圖片
                </button>
              </span>
            </p>
            <img
              v-if="imageStyle === '本地圖片' && imgUrl"
              :src="imgUrl"
              :alt="productDate.title"
              class="w-full object-cover"
            />
            <img
              v-else-if="imageStyle === '雲端圖片'"
              :src="productDate.coverUrl"
              :alt="productDate.title"
              class="w-full object-cover"
            />
            <label for="imgUrl" v-if="imageStyle === '雲端圖片'"
              >網址<input
                type="text"
                name="imgUrl"
                id="imgUrl"
                v-model="productDate.coverUrl"
                class="border border-gray-01 p-2 w-full"
                placeholder="請輸入圖片網址..."
                aria-label="雲端圖片輸入框"
            /></label>
            <div class="flex flex-col gap-3" v-else>
              <label
                for="updateImg"
                class="btn-primary cursor-pointer relative"
                v-if="isImgurLogin"
                >上傳圖片
                <input
                  type="file"
                  name="updateImg"
                  accept=".png"
                  id="updateImg"
                  class="absolute opacity-0"
                  @change="($event) => postFinal($event)"
                />
              </label>
              <router-link to="/admin" class="btn-primary" v-else
                >取得驗證</router-link
              >
            </div>
          </div>
          <div class="flex-grow lg:border-l-2 flex flex-col gap-3 lg:px-3">
            <label for="" class="grid"
              >* 標題
              <input
                type="text"
                name=""
                id=""
                class="border border-gray-01 p-2 w-full"
                placeholder="請輸入商品名稱..."
            /></label>
            <div>
              <p>
                <label for="">* 商品系列 </label>
                <button
                  type="button"
                  class="text-brand-01 font-bold text-3xl float-right opacity-60 hover:opacity-100"
                >
                  +
                </button>
                <button
                  type="button"
                  class="text-brand-01 font-bold text-[35px] leading-8 float-right opacity-60 hover:opacity-100"
                >
                  -
                </button>
              </p>
              <p class="bg-brand-06 bg-opacity-40 my-2 p-3">
                <label for=""
                  >新增系列
                  <input
                    type="text"
                    class="border border-gray-01 p-2 w-full mt-3"
                  />
                </label>
                <span class="text-end block">
                  <button type="button" class="btn-outline py-1 mt-3 mr-3">
                    取消
                  </button>
                  <button type="button" class="btn-outline py-1 mt-3">
                    新增
                  </button>
                </span>
              </p>
              <select name="" id="" class="border border-gray-01 p-2 w-full">
                <option value="" selected disabled>請選擇商品系列</option>
                <option value="">高山烏龍</option>
                <option value="">高山烏龍</option>
                <option value="">高山烏龍</option>
              </select>
            </div>

            <label for="" class="grid"
              >* 商品分類
              <select name="" id="" class="border border-gray-01 p-2 w-full">
                <option value="" selected disabled>請選擇商品分類</option>
                <option value="">茶葉</option>
                <option value="">茶壺</option>
                <option value="">茶罐</option>
                <option value="">茶具組</option>
                <option value="">品茶小物</option>
              </select>
            </label>

            <div class="grid lg:grid-cols-2 lg:gap-7 gap-3">
              <label for="" class="grid"
                >* 價格<input
                  type="number"
                  name=""
                  id=""
                  class="border border-gray-01 p-2 w-full"
                  placeholder="請輸入價格..."
              /></label>
              <label for="" class="grid"
                >* 數量<input
                  type="number"
                  name=""
                  id=""
                  class="border border-gray-01 p-2 w-full"
                  placeholder="請輸銷售數量..."
              /></label>
            </div>
            <div>
              <p class="mb-3">
                * 商品介紹
                <!-- <button
                  type="button"
                  class="text-brand-01 opacity-80 font-bold text-3xl float-right hover:text-brand-02"
                >
                  +
                </button> -->
              </p>
              <ckeditor
                :editor="editor"
                v-model="editorData"
                :config="editorConfig"
              ></ckeditor>
              <!-- <ul class="list-decimal list-inside introduce grid gap-5">
                <li>
                  <textarea
                    name=""
                    id=""
                    placeholder="請輸入商品介紹內容..."
                    class="border-b border-gray-01 w-[95%] overflow-auto"
                  ></textarea>
                </li>
                <li>
                  <textarea
                    name=""
                    id=""
                    class="border-b border-gray-01 w-[95%] overflow-auto"
                  ></textarea>
                </li>
              </ul> -->
            </div>
          </div>
        </div>
      </template>
      <template #modal-footer></template>
    </DialogModal>
  </div>
</template>
<script>
import DialogModal from './DialogModal.vue'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import { mapState, mapActions } from 'pinia'
import { updatedImgStore } from '../stores/index'
export default {
  data: () => ({
    imageStyle: '雲端圖片',
    productDate: {
      coverUrl: '',
      title: ''
    },
    editor: ClassicEditor,
    editorData: '<p>Hello world!!</p>',
    editorConfig: {
      placeholder: '請輸入商品介紹...',
      toolbar: ['bold', 'italic', 'blockQuote', '|', 'undo', 'redo']
    },
    isImgurLogin: sessionStorage.getItem('first_token') !== 'null'
  }),
  computed: {
    ...mapState(updatedImgStore, ['imgUrl'])
  },
  methods: {
    ...mapActions(updatedImgStore, ['postFinal']),
    showEditor() {
      console.log(this.editorData)
    }
  },
  components: {
    DialogModal
  }
}
</script>
