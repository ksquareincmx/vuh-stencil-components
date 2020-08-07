<template>
  <div class="about">
    <k-banner type="success">
      <k-banner-text>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis nat.</k-banner-text>
      <k-button color="terciary" @click="doAction($event)">Dismiss</k-button>
    </k-banner>
    <k-input :value="message" @input="setMessage($event)" label="Full name" />
    <p>The message is: {{ message }}</p>

    <k-text-field :value="textField" @input="setTextField($event)" max-length="100" label="Bio" />
    <p>The field content is: {{ textField }}</p>

    <section>
      <k-checkbox @input="setChecked($event)" value="default">Default</k-checkbox>
      <k-checkbox @input="setChecked($event)" value="option 1">Option 1</k-checkbox>
      <k-checkbox @input="setChecked($event)" value="option 2">Option 2</k-checkbox>
      <k-checkbox @input="setChecked($event)" value="option 3">Option 3</k-checkbox>
    </section>

    <p>CheckedValue: {{ checkedNames }}</p>

    <section>
      <k-radio-button-group>
        <k-radio-button name="Option 1" value="option 1" @input="setRadio($event)">Option 1</k-radio-button>
        <k-radio-button name="Option 2" value="option 2" @input="setRadio($event)">Option 2</k-radio-button>
        <k-radio-button name="Option 3" value="option 3" @input="setRadio($event)">Option 3</k-radio-button>
      </k-radio-button-group>
    </section>
    <p>Picked: {{ picked }}</p>

    <section style="margin: 24px;">
      <k-dropdown>
        <k-dropdown-item @input="setSelect($event)" name="op0" value="00">Select your option</k-dropdown-item>
        <k-dropdown-item @input="setSelect($event)" name="op1" value="01">Option 1</k-dropdown-item>
        <k-dropdown-item @input="setSelect($event)" name="op2" value="02">Option 2</k-dropdown-item>
        <k-dropdown-item @input="setSelect($event)" name="op3" value="03">Option 3</k-dropdown-item>
      </k-dropdown>
    </section>

    <section style="margin: 24px;">
      <k-dropdown variant="input" :validation-state="valState">
        <k-dropdown-item @input="setSelect($event)" name="op0" value="00">Select your option</k-dropdown-item>
        <k-dropdown-item @input="setSelect($event)" name="op1" value="01">Option 1</k-dropdown-item>
        <k-dropdown-item @input="setSelect($event)" name="op2" value="02">Option 2</k-dropdown-item>
        <k-dropdown-item @input="setSelect($event)" name="op3" value="03">Option 3</k-dropdown-item>
      </k-dropdown>
    </section>

    <div v-if="loading">
      <k-spinner />
    </div>
    <div v-else>
      <k-content>
        <h1>This is an about page</h1>
        <div style="display: flex; justify-content: space-around;">
          <k-button @click="doAction($event)">Button 1</k-button>
          <k-button>Button 2</k-button>
          <k-button>Button 3</k-button>
        </div>
      </k-content>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
  data() {
    return {
      message: "",
      textField: "",
      checkedNames: [],
      selectedValue: "00",
      picked: "option 1",
      valState: "",
      loading: true,
    };
  },
  mounted() {
    setTimeout(() => {
      this.loading = false;
    }, 1000);
    setTimeout(() => {
      this.valState = "error";
    }, 2000);
  },
  methods: {
    setMessage(event) {
      this.message = event.target.value;
    },

    setTextField(event) {
      this.textField = event.target.value;
    },

    setChecked(event) {
      const value = event.target.value;
      const checked = event.target.checked;

      if (checked) {
        this.checkedNames.push(event.target.value);
      } else {
        const index = this.checkedNames.indexOf(value);
        if (index !== -1) {
          this.checkedNames.splice(index, 1);
        }
      }
    },

    setRadio(event) {
      this.picked = event.target.value;
    },

    setSelect(event) {
      console.log(event);
      // this.selectedValue = event.target.value;
    },
    doAction(event) {
      console.log("clicked", event);
    },
  },
};
</script>
