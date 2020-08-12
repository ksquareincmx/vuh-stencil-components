<template>
  <div class="home">
    <section>
      <k-paginator @click="setPageChanged($event)" current-page="1" total-pages="17"></k-paginator>
      <br />
      <k-paginator @click="setPageChanged($event)" current-page="3" total-pages="4"></k-paginator>
      <br />
    </section>
    <k-content>
      <h1>Heading 1 through KContent</h1>
      <h3>Heading 3 through KContent</h3>
      <p>Paragraph through KContent</p>
    </k-content>

    <section>
      <k-typography>
        <h1>Searchbar</h1>
      </k-typography>
      <k-search-bar @input="setSearch($event)" :value="search"></k-search-bar>
      <p>{{ search }}</p>
    </section>

    <k-stepper>
      <k-stepper-item
        v-for="step of steps"
        :key="step.id"
        :status="step.status"
        @click="setCurrentStep"
      >{{ step.label }}</k-stepper-item>
    </k-stepper>

    <section>
      <k-typography>
        <h1>Table</h1>
      </k-typography>

      <k-table>
        <k-table-row type="navbar" style="min-height: 56px;">
          <k-table-column size="7" style="height: 100%;">
            <k-button @click="doAnAction()">My button</k-button>
            <!-- <k-typography style="color: black">
              <h4 @click="doAnAction()">Displaying Course Status</h4>
            </k-typography>-->
          </k-table-column>
          <k-table-column size="1" style="height: 100%;">
            <k-dropdown variant="table" label="Row" style="height: 100%;">
              <k-dropdown-item name="op1" value="01">25</k-dropdown-item>
              <k-dropdown-item name="op2" value="02">100</k-dropdown-item>
              <k-dropdown-item name="op3" value="03">250</k-dropdown-item>
            </k-dropdown>
          </k-table-column>
          <k-table-column size="3" style="height: 100%;">
            <k-paginator current-page="1" total-pages="17"></k-paginator>
          </k-table-column>
        </k-table-row>
        <k-table-row type="header">
          <k-table-header-column @click="setSort($event)" size="3" default>
            <k-button @click="doAnAction()">My button</k-button>
          </k-table-header-column>
          <k-table-header-column @click="setSort($event)" size="1" sortable="false">Hello there.</k-table-header-column>
          <k-table-header-column @click="setSort($event)" size="1">Hello there.</k-table-header-column>
          <k-table-header-column @click="setSort($event)" size="1">Hello there.</k-table-header-column>
          <k-table-header-column @click="setSort($event)" size="1">Hello there.</k-table-header-column>
          <k-table-header-column @click="setSort($event)" size="1">Hello there.</k-table-header-column>
          <k-table-header-column @click="setSort($event)" size="1">Hello there.</k-table-header-column>
          <k-table-header-column @click="setSort($event)" size="1" disabled>Hello there.</k-table-header-column>
          <k-table-header-column @click="setSort($event)" size="1" disabled>Hello there.</k-table-header-column>
          <k-table-header-column @click="setSort($event)" size="1" disabled>Hello there.</k-table-header-column>
        </k-table-row>
        <k-table-row>
          <k-table-column size="3">
            <k-button @click="doAnAction()">My button</k-button>
          </k-table-column>
          <k-table-column size="1">General Kenobi.</k-table-column>
          <k-table-column size="1">General Kenobi.</k-table-column>
          <k-table-column size="1">General Kenobi.</k-table-column>
          <k-table-column size="1">General Kenobi.</k-table-column>
          <k-table-column size="1">General Kenobi.</k-table-column>
          <k-table-column size="1">General Kenobi.</k-table-column>
          <k-table-column size="1">General Kenobi.</k-table-column>
          <k-table-column size="1">General Kenobi.</k-table-column>
          <k-table-column size="1">General Kenobi.</k-table-column>
        </k-table-row>
        <k-table-row>
          <k-table-column size="3">You are a bold one!</k-table-column>
          <k-table-column size="1">You are a bold one!</k-table-column>
          <k-table-column size="1">You are a bold one!</k-table-column>
          <k-table-column size="1">You are a bold one!</k-table-column>
          <k-table-column size="1">You are a bold one!</k-table-column>
          <k-table-column size="1">You are a bold one!</k-table-column>
          <k-table-column size="1">You are a bold one!</k-table-column>
          <k-table-column size="1">You are a bold one!</k-table-column>
          <k-table-column size="1">You are a bold one!</k-table-column>
          <k-table-column size="1">You are a bold one!</k-table-column>
        </k-table-row>
      </k-table>
    </section>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      search: "",
      steps: [
        {
          id: 1,
          status: "complete",
          label: "Step 1",
        },
        {
          id: 2,
          status: "incomplete",
          label: "Step 2",
        },
        {
          id: 3,
          status: "none",
          label: "Step 3",
        },
      ],
    };
  },
  methods: {
    setCurrentStep: function () {
      console.log("step", this.steps);
    },
    doAnAction: function () {
      console.log("I'm doing an action");
    },
    setSearch: function (ev) {
      this.search = ev?.target?.value;
    },
    setPageChanged: function (ev) {
      console.log(ev?.target?.value);
      alert("current page " + ev?.target?.value);
    },
    setSort: function (ev) {
      console.log(ev?.target?.value);
    },
  },
};
</script>
