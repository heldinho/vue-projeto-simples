<template>
  <div class="m-4">
    <h1 class="mb-4">{{ title }}</h1>
    <div>
      <input-tag
        v-model="tags"
        :before-adding="tag => withTags(tag)"
        ref="tag"
      ></input-tag>
      {{ tags }} - {{ allTags }}
    </div>
    <div class="card">
      <div class="card-header">Helder Passos</div>
      <div class="card-body">
        <form>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label class="label-title" for="inputEmail4">Email</label>
              <input type="email" class="form-control" id="inputEmail4" />
            </div>
            <div class="form-group col-md-6">
              <label class="label-title" for="inputPassword4">Password</label>
              <input type="password" class="form-control" id="inputPassword4" />
            </div>
          </div>
          <div class="form-group">
            <label class="label-title" for="inputAddress">Address</label>
            <input
              type="text"
              class="form-control"
              id="inputAddress"
              placeholder="1234 Main St"
            />
          </div>
          <div class="form-group">
            <label class="label-title" for="inputAddress2">Address 2</label>
            <input
              type="text"
              class="form-control"
              id="inputAddress2"
              placeholder="Apartment, studio, or floor"
            />
          </div>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label class="label-title" for="inputCity">City</label>
              <input type="text" class="form-control" id="inputCity" />
            </div>
            <div class="form-group col-md-4">
              <label class="label-title" for="inputState">State</label>
              <select id="inputState" class="form-control">
                <option selected>Choose...</option>
                <option>...</option>
              </select>
            </div>
            <div class="form-group col-md-2">
              <label class="label-title" for="inputZip">Zip</label>
              <input type="text" class="form-control" id="inputZip" />
            </div>
          </div>
          <div class="form-group">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" id="gridCheck" />
              <label class="form-check-label" for="gridCheck">
                Check me out
              </label>
            </div>
          </div>
          <button type="submit" class="btn btn-primary">Sign in</button>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import InputTag from 'vue-input-tag'

const $$ = document.querySelectorAll.bind(document)

export default {
  name: 'Teste',
  props: ['title'],
  components: {
    InputTag
  },
  data() {
    return {
      allTags: ['ADMIN', 'TESTE', 'ABC'],
      tags: []
    }
  },
  methods: {
    withTags(tag) {
      if (tag === '') return false
      var _tag = tag
        .toString()
        .replace(/,/g, '')
        .trim()
        .toUpperCase()
      if (this.allTags.includes(_tag)) {
        if (this.tags.includes(_tag)) {
          this.$refs.tag.newTag = ''
          this.$nextTick(() => {
            var arrTags = $$('.input-tag')
            for (var i = 0; i < arrTags.length; i++) {
              if (arrTags[i].children[0].textContent == _tag) {
                // arrTags[i].classList.remove('input-tag')
                arrTags[i].classList.add('withPermissions')
                // arrTags[i].style.cssText = this.styleTag
                // arrTags[i].children[1].style.color = this.styleRemove
              }
            }
          })
        } else {
          this.$refs.tag.newTag = ''
          this.tags.push(_tag)
          this.$nextTick(() => {
            var arrTags = $$('.input-tag')
            for (var i = 0; i < arrTags.length; i++) {
              if (arrTags[i].children[0].textContent == _tag) {
                // arrTags[i].classList.remove('input-tag')
                arrTags[i].classList.add('withPermissions')
                // arrTags[i].style.cssText = this.styleTag
                // arrTags[i].children[1].style.cssText = this.styleRemove
              }
            }
          })
        }
      } else {
        if (this.tags.includes(_tag)) {
          this.$refs.tag.newTag = ''
        } else {
          this.$refs.tag.newTag = ''
          this.tags.push(_tag)
        }
      }
    }
  }
}
</script>
<style lang="scss">
h1 {
  color: #14a800;
  background-color: #555;
  padding: 10px 5px;
  transition: all 200ms linear;
  cursor: default;
  &:hover {
    color: #fff;
    background-color: #333;
    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.6);
  }
}
.label-title {
  float: left;
}

// https://github.com/matiastucci/vue-input-tag
.legend-tag-with {
  color: #222;
  float: right;
  &::before {
    content: '';
    display: -ms-inline-flexbox;
    display: inline-flex;
    position: relative;
    border: 1px solid var(--red);
    margin-right: 0.25rem;
    width: 40px;
    height: 20px;
    top: 5px;
    background-color: var(--red);
  }
}

.vue-input-tag-wrapper {
  font-size: 1rem;
  font-weight: 400;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.vue-input-tag-wrapper .input-tag {
  background-color: var(--blue) !important;
  border: 1px solid var(--blue) !important;
  color: var(--white) !important;
  .remove {
    color: var(--white) !important;
  }
}

.vue-input-tag-wrapper .withPermissions {
  background-color: var(--red) !important;
  border: 1px solid var(--red) !important;
  color: var(--white) !important;
  .remove {
    color: var(--white) !important;
  }
}
</style>
