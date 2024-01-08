<template>
      <div class="p-5">
            <div class="mt-2">
                  <div class="w-64 font-bold h-6 mx-2 mt-3 text-gray-800">Forex Exchange Conversion</div>
                  <div class="flex flex-col md:flex-row pb-4 mb-4">
                        <div class="flex-1">
                              <div class="flex flex-col md:flex-row">
                                    <select id="category" v-model="category" class="mx-2 flex-1 h-10 mt-2 form-select w-full" @change="changeCategory()">
                                          <option :value="forex.iso3" v-for="(forex, findex) in props.datas"
                                                :key="findex">{{ forex.name }}</option>
                                    </select>
                                    <div class="w-full flex-1 mx-2">
                                          <div class="my-2 p-1 bg-white flex border border-gray-200 rounded">
                                                <input type="number" step="any" v-model="currency_one" id="currency_one" placeholder="0.0" class="p-1 px-2 appearance-none outline-none w-full text-gray-800 " @input="convertOne()">
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>
                  <div class="w-64 font-bold h-6 mx-2 mt-3 text-gray-800">Neplease Rupees</div>
                  <div class="flex flex-col md:flex-row pb-4 mb-4">
                        <div class="flex-1">
                              <div class="flex flex-col md:flex-row">
                                    <div class="w-full flex-1 mx-2">
                                          <div class="my-2 p-1 bg-white flex border border-gray-200 rounded">
                                                <input type="number" step="any" v-model="currency_two" id="currency_two" placeholder="0.0" class="p-1 px-2 appearance-none outline-none w-full text-gray-800 " @input="convertTwo()">
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      </div>
</template>
<script setup>
import { ref } from 'vue';

const props = defineProps(['datas'])

var category = ref('USD');
var currency_one = ref(0.0);
var currency_two = ref(0.0);

function changeCategory()
{
      convertOne()
}

function convertOne() {
      var usdObject = props.datas.find(item => item.iso3 === category.value);
      currency_two.value = currency_one.value * (usdObject.buy / usdObject.unit);
}
function convertTwo()
{
      var usdObject = props.datas.find(item => item.iso3 === category.value);
      currency_one.value = currency_two.value * (usdObject.unit / usdObject.buy);
}

</script>