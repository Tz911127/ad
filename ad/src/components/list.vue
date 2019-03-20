<template>
  <section style="margin-top:20px">
    <el-form :inline="true" :model="formInline" class="demo-form-inline" style="text-align:left">
      <el-form-item label="状态">
        <el-select v-model="formInline.type" placeholder="订单状态" clearable>
          <el-option
            v-for="option in options"
            :key="option.value"
            :label="option.label"
            :value="option.value"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="来源">
        <el-select v-model="formInline.from" placeholder="全部" clearable>
          <el-option
            v-for="item in items"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-form-item>
    </el-form>
    <el-table :data="tableData" style="100%" width="180">
      <el-table-column prop="num" width="180" label="订单编号"></el-table-column>
      <el-table-column prop="time" width="180" label="投放时间"></el-table-column>
      <el-table-column prop="require" label="投放要求"></el-table-column>
      <el-table-column prop="media" label="选择媒体数"></el-table-column>
      <el-table-column prop="money" label="金额"></el-table-column>
      <el-table-column prop="from" label="来源"></el-table-column>
      <el-table-column prop="type" label="状态">
        <template slot-scope="scope">
          <span v-if="scope.row.type == 1" style="color:#E93047">{{scope.row.type|filterType}}</span>
          <span v-if="scope.row.type == 2" style="color:#A1A7B1">{{scope.row.type|filterType}}</span>
          <span v-if="scope.row.type == 0" style="color:#001529">{{scope.row.type|filterType}}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="200">
        <template slot-scope="scope">
          <el-button @click="goDetail(scope.row)" type="text">详情</el-button>
          <el-button v-if="scope.row.type == '1'" @click="goDetail(scope.row)" type="text">接单</el-button>
          <el-button v-if="scope.row.type == '2'" @click="goDetail(scope.row)" type="text">投放</el-button>
        </template>
      </el-table-column>
    </el-table>
  </section>
</template>
<script>
export default {
  data() {
    return {
      tableData: [
        {
          num: "201902181032190001",
          time: "2019-01-01至2019-06-01",
          require: "5S-100次",
          media: "50",
          money: "￥900.00",
          from: "网站",
          type: "0"
        },
        {
          num: "201902181032190002",
          time: "2019-01-01至2019-06-01",
          require: "5S-100次",
          media: "30",
          money: "￥900.00",
          from: "公众号",
          type: "1"
        },
        {
          num: "201902181032190004",
          time: "2019-01-01至2019-06-01",
          require: "4S-100次",
          media: "50",
          money: "￥1100.00",
          from: "网站",
          type: "2"
        },
        {
          num: "201902181032190123",
          time: "2019-01-01至2019-06-01",
          require: "2S-70次",
          media: "60",
          money: "￥900.00",
          from: "公众号",
          type: "1"
        },
        {
          num: "201902181032190043",
          time: "2019-01-01至2019-06-01",
          require: "2S-60次",
          media: "110",
          money: "￥800.00",
          from: "公众号",
          type: "0"
        },
        {
          num: "201902181032190065",
          time: "2019-01-01至2019-06-01",
          require: "4S-100次",
          media: "50",
          money: "￥700.00",
          from: "网站",
          type: "1"
        },
        {
          num: "201902181032190055",
          time: "2019-01-01至2019-06-01",
          require: "5S-90次",
          media: "80",
          money: "￥1900.00",
          from: "公众号",
          type: "2"
        }
      ],
      formInline: {
        type: "",
        from: ""
      },
      options: [
        { label: "待接单", value: "1" },
        { label: "已投放", value: "2" },
        { label: "待投放", value: "0" }
      ],
      items: [
        {
          label: "网站",
          value: "1"
        },
        {
          label: "公众号",
          value: "2"
        }
      ]
    };
  },
  methods: {
    goDetail(row) {
      this.$router.push({ path: "/detail", query: { data: row.type } });
    }
  },
  filters: {
    filterType(data) {
      if (data === "1") {
        return "待付款";
      } else if (data === "2") {
        return "待投放";
      } else {
        return "已投放";
      }
    }
  }
};
</script>
<style scoped>
</style>

