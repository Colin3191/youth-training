<template>
  <div id="container">
    <div id="sidebar">
      <span @mousedown="() => dragStart('row')">Row</span>
      <span @mousedown="() => dragStart('col')">Col</span>
      <span @mousedown="() => dragStart('btn')">Button</span>
    </div>
    <div id="editpanel" data-accept-type="row">
      <div
        data-accept-type="col"
        :data-row="i"
        class="row"
        v-for="(row, i) of rows"
        :key="row"
      >
        <div
          data-accept-type="btn"
          :data-col="j"
          class="col"
          v-for="(col, j) of row.cols"
          :key="col"
        >
          <button v-for="ele of col.children" :key="ele">
            {{ ele.content }}
          </button>
        </div>
      </div>
    </div>
    <div
      id="dragable"
      v-if="drag.isDraging"
      :style="{ left: drag.x + 'px', top: drag.y + 'px' }"
    >
      {{ drag.type }}
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      drag: {
        x: 0,
        y: 0,
        x0: 0,
        y0: 0,
        dx: 0,
        dy: 0,
        type: "none",
        isDraging: false,
      },
      rows: [],
    };
  },
  methods: {
    dragStart(type) {
      this.drag.type = type;
      this.drag.isDraging = true;

      let move = (e) => {
        // [dx, dy] = [e.clientX - x0, e.clientY - y0];
        this.drag.x = e.clientX + 10;
        this.drag.y = e.clientY + 10;
      };
      let up = (e) => {
        document.removeEventListener("mousemove", move);
        document.removeEventListener("mouseup", up);
        this.drag.isDraging = false;
        let areaElement = document.elementFromPoint(e.clientX, e.clientY);
        let current = areaElement;
        while (current && current.dataset["acceptType"] !== type) {
          current = current.parent;
        }
        if (type === "row") {
          this.rows.push({ cols: [] });
        }
        if (type === "col") {
          this.rows[current.dataset["row"]].cols.push({ children: [] });
        }
        if (type === "btn") {
          this.rows[current.parentNode.dataset["row"]].cols[
            current.dataset["col"]
          ].children.push({ content: "btn" });
        }
      };
      document.addEventListener("mousemove", move);
      document.addEventListener("mouseup", up);
    },
  },
};
</script>

<style>
#container {
  height: 100%;
  width: 100%;
  display: flex;
  position: absolute;
  box-sizing: border-box;
}
#sidebar > * {
  width: 60px;
  height: 60px;
  display: inline-block;
  margin: 10px;
  box-sizing: border-box;
  border: 1px solid black;
  user-select: none;
}
#sidebar {
  background-color: #eeeeee;
  box-sizing: border-box;
}
#editpanel {
  flex: 1;
  overflow: scroll;
  box-sizing: border-box;
}
.row {
  width: 100%;
  min-height: 300px;
  display: flex;
  margin-top: 10px;
  background-color: khaki;
  box-sizing: border-box;
}
.col {
  height: 200px;
  min-width: 200px;
  background-color: lightgreen;
  margin: 10px;
  box-sizing: border-box;
}
#dragable {
  width: 60px;
  height: 60px;
  display: inline-block;
  margin: 10px;
  box-sizing: border-box;
  border: 1px solid black;
  user-select: none;
  position: absolute;
  box-sizing: border-box;
}
</style>
