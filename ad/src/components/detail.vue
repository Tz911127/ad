<template>
  <section>
    <div style="text-align:left;margin-bottom:20px">
      <span style="color:rgba(161, 167, 177, 1)">订单管理</span>/ 订单详情
    </div>
    <div>
      <div v-if="type =='0'" class="type_">
        <span class="type_1" v-if="type =='0'">订单状态:已投放</span>
      </div>
      <div v-else class="type">
        <span class="type_1" v-if="type =='1'">订单状态：待接单 ￥500.00</span>
        <span class="type_1" v-if="type =='2'">订单状态：待投放</span>
        
        <span class="type_2" v-if="type =='1'">
          <!-- 请在<span>{{time}}</span> 前付款，还剩23时51分订单自动关闭 -->
        </span>
        <span class="type_2" v-if="type =='2'">您可以选择广告开始投放</span>
        <el-button type="warning" v-if="type =='1'" @click="pay">接单并付款</el-button>
        <el-button type="warning" @click="open" v-if="type =='2'">选择广告</el-button>
      </div>
      <div class="typeDetail">
        <span>订单编号：201902191032190</span>
        <span>订单金额：¥2900.00</span>
        <span>投放要求：5s-100次/天</span>
        <span>投放时间：2019/01/01至2019/06/01</span>
        <br>
        <br>
        <span>下单时间：{{payTime}}</span>
      </div>
    </div>
    <div class="media">
      <span>媒体信息</span>
    </div>
    <el-table :data="tableData" style="100%" width="180">
      <el-table-column label="终端编号" prop="num"></el-table-column>
      <el-table-column label="终端名称" prop="name"></el-table-column>
      <el-table-column label="分辨率" prop="fbl"></el-table-column>
      <el-table-column label="城市" prop="city"></el-table-column>
    </el-table>

    <el-dialog title="选择广告" :visible.sync="dialogVisible">
      <div class="change_ad">
        <img src="../assets/img3.png" alt>
        <h4>香飘飘奶茶广告</h4>
        <span>1920*1080 5s</span>
        <div>
          <!-- <el-button>预览</el-button> -->
          <el-button @click="pub">投放</el-button>
        </div>
      </div>
      <div class="change_ad">
        <img src="../assets/img4.png" alt>
        <h4>日本进口日东红茶经典原味</h4>
        <span>1920*1080 5s</span>
        <div>
          <!-- <el-button>预览</el-button> -->
          <el-button @click="pub">投放</el-button>
        </div>
      </div>
      <div class="change_ad">
        <img src="../assets/img5.png" alt>
        <h4>奶茶粉内蒙古塔拉额吉酥油奶茶</h4>
        <span>1920*1080 5s</span>
        <div>
          <!-- <el-button>预览</el-button> -->
          <el-button @click="pub">投放</el-button>
        </div>
      </div>
      <div class="change_ad">
        <img src="../assets/img6.png" alt>
        <h4>台湾永大寒天晶球琥珀晶球</h4>
        <span>1920*1080 5s</span>
        <div>
          <!-- <el-button>预览</el-button> -->
          <el-button @click="pub">投放</el-button>
        </div>
      </div>
      <div class="change_ad">
        <img src="../assets/img7.png" alt>
        <h4>香飘飘奶茶广告</h4>
        <span>1920*1080 5s</span>
        <div>
          <!-- <el-button>预览</el-button> -->
          <el-button @click="pub">投放</el-button>
        </div>
      </div>
      <div class="change_ad">
        <img src="../assets/img8.png" alt>
        <h4>香飘飘奶茶广告</h4>
        <span>1920*1080 5s</span>
        <div>
          <!-- <el-button>预览</el-button> -->
          <el-button @click="pub">投放</el-button>
        </div>
      </div>
    </el-dialog>

    <el-dialog title :visible.sync="dialog" style="text-align:left">
      <div class="tit">
        <i class="el-icon-info" style="color:#096DD9"></i>
        <span>使用手机支付宝扫码支付，资金将直接打入对方账户，无法退回</span>
      </div>
      <div class="pay clearfix">
        <div style="width:50%;float:left">
          <img src="../assets/img2.png" alt>
        </div>
        <div style="text-align:left">
          <span>
            支付
            <i style="color:#f9b427;font-size:24px">500.00</i> 元
          </span>
          <br>
          <span style="color:#E93047">剩余0天23时51分</span>
          <br>
          <span>订单编号：201902191032190</span>
          <br>
          <span>下单时间：{{time}}</span>
          <br>
          <br>
          <el-button type="primary" @click="payOver">付款完成</el-button>
        </div>
      </div>
    </el-dialog>
  </section>
</template>
<script>
export default {
  data() {
    return {
      tableData: [
        {
          num: "1000100843",
          name: "小米商用机",
          fbl: "1920*1080",
          city: "武汉"
        },
        {
          num: "1000157385",
          name: "小米商业区",
          fbl: "1920*1080",
          city: "武汉"
        },
        {
          num: "1000131431",
          name: "TCL",
          fbl: "1920*1080",
          city: "武汉"
        },
        {
          num: "1000147397",
          name: "海尔",
          fbl: "1920*1080",
          city: "武汉"
        }
      ],
      dialogVisible: false,
      type: "",
      isSub: false,
      dialog: false,
      time: "",
      payTime:""
    };
  },
  methods: {
    open() {
      this.dialogVisible = true;
    },
    getData() {
      this.type = this.$route.query.data;
    },
    pub() {
      this.type = 0;
      this.dialogVisible = false;
      this.isSub = true;
    },
    pay() {
      this.dialog = true;
    },
    payOver() {
      this.dialog = false;
      this.type = 2;
    },
    getDay() {
      let da =
        new Date().getDate() < 10
          ? "0" + new Date().getDate()
          : new Date().getDate();
      return da+1;
    },
    getTime(num) {
      let time =
        new Date().getFullYear() +
        "/" +
        (new Date().getMonth() + 1 < 10
          ? "0" + (new Date().getMonth() + 1)
          : new Date().getMonth() + 1) +
        "/" +
        (num === 1
          ? new Date().getDate() < 10
            ? "0" + new Date().getDate()
            : new Date().getDate()
          : this.getDay()) +
        " " +
        (new Date().getHours() < 10
          ? "0" + new Date().getHours()
          : new Date().getHours()) +
        ":" +
        (new Date().getMinutes() < 10
          ? "0" + new Date().getMinutes()
          : new Date().getMinutes()) +
        ":" +
        (new Date().getSeconds() < 10
          ? "0" + new Date().getSeconds()
          : new Date().getSeconds());
      return time;
    }
  },
  mounted() {
    this.getData();
    this.time = this.getTime(2);
    this.payTime=this.getTime(1)
  }
};
</script>
<style scoped>
.type {
  background: rgba(249, 180, 39, 0.1);
  height: 80px;
  line-height: 80px;
  text-align: left;
  padding-left: 20px;
}
.type_ {
  background: rgba(82, 196, 26, 0.1);
  height: 80px;
  line-height: 80px;
  text-align: left;
  padding-left: 20px;
}
.type_ .type_1 {
  color: rgba(82, 196, 26, 1);
  font-size: 28px;
}
.type .type_1 {
  color: #f9b427;
  font-size: 28px;
}
.type .type_2 {
  color: rgba(95, 106, 123, 1);
  font-size: 14px;
}
.typeDetail {
  color: rgba(95, 106, 123, 1);
  padding: 40px 40px 40px 0;
  text-align: left;
  background: #fff;
  height: 40px;
}
.typeDetail span {
  margin: 0 20px;
}
.media {
  text-align: left;
  /* padding: 20px; */
  background: #fff;
  margin-bottom: 20px;
  color: #096dd9;
}
.media span {
  display: inline-block;
  text-align: center;
  width: 120px;
  height: 60px;
  line-height: 60px;
  border-bottom: 1px solid #096dd9;
}
.change_ad {
  width: 200px;
  height: 252px;
  display: inline-block;
}
.change_ad img {
  width: 200px;
  height: 160px;
}

.pay img {
  width: 260px;
  height: 260px;
}
.pay div {
  display: inline-block;
}
.tit {
  height: 40px;
  border: 1px solid #91d5ff;
  background: #e6f7ff;
  line-height: 40px;
  color: #5f6a7b;
  padding-left: 10px;
  border-radius: 4px;
}
.pay div span {
  display: block;
  margin: 10px;
}
.clearfix:after {
  content: "";
  height: 0;
  line-height: 0;
  display: block;
  visibility: hidden;
  clear: both;
}
.clearfix {
  zoom: 1;
}
</style>
