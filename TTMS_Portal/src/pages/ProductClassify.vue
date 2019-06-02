<template>
  <el-container>
    <el-header>Header</el-header>
    <el-container>
      <el-aside width="200px">Aside</el-aside>
      <el-main>
        <div class="top"><p class="title" style="color:#B3C0D1">通知管理</p>
          <div class="path" ><el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">产品管理</el-breadcrumb-item>
            <el-breadcrumb-item>产品</el-breadcrumb-item>
            <el-breadcrumb-item>产品分类</el-breadcrumb-item>
          </el-breadcrumb>
          </div>
        </div>
        <div class="body">
          <el-row :gutter="20">
            <el-col :span="7"><div class="grid-content bg-purple">
              <div class="grid-content bg-purple">
              <div class="block" style="border:1px solid #B3C0D1">
                <div class="title" style="border:1px solid #B3C0D1; background:#99a9bf">主分类</div>
                <div class="title1"><el-link type="primary" >添加</el-link>
                  <el-link type="primary">&nbsp;&nbsp;&nbsp;删除</el-link>
                  <el-link type="primary">&nbsp;&nbsp;&nbsp;修改</el-link>
                </div>
                <div class="ff" >
                  <el-table
                    :data="tableData1"
                    style="width: 100%"><el-table-column
                    prop="name"
                    label="名称"
                    width="300">
                  </el-table-column>
                  </el-table>
                </div>
              </div>
            </div>
            </div></el-col>
            <el-col :span="7"><div class="grid-content bg-purple-light">
              <div class="grid-content bg-purple">
              <div class="block" style="border:1px solid #B3C0D1">
                <div class="title" style="border:1px solid #B3C0D1; background:#99a9bf">次分类</div>
                <div class="title1"><el-link type="primary" >添加</el-link>
                  <el-link type="primary">&nbsp;&nbsp;&nbsp;删除</el-link>
                  <el-link type="primary">&nbsp;&nbsp;&nbsp;修改</el-link>
                </div>
                <div class="ff" >
                  <el-table
                    :data="tableData2"
                    style="width: 100%"><el-table-column
                    prop="name"
                    label="名称"
                    width="300">
                  </el-table-column>
                  </el-table>
                </div>
              </div>
            </div>
            </div></el-col>
            <el-col :span="7"><div class="grid-content bg-purple"></div>
              <div class="grid-content bg-purple">
              <div class="block" style="border:1px solid #B3C0D1">
                <div class="title" style="border:1px solid #B3C0D1; background:#99a9bf">子分类</div>
                <div class="title1"><el-link type="primary" >添加</el-link>
                  <el-link type="primary">&nbsp;&nbsp;&nbsp;删除</el-link>
                  <el-link type="primary">&nbsp;&nbsp;&nbsp;修改</el-link>
                </div>
                <div class="ff" >
                  <el-table
                    :data="tableData3"
                    style="width: 100%"><el-table-column
                    prop="name"
                    label="名称"
                    width="300">
                  </el-table-column>
                  </el-table>
                </div>
              </div>
            </div></el-col>
          </el-row>
        </div>

      </el-main>
    </el-container>
  </el-container>
</template>

<script>
  export default {
    name: 'ClassifyInformation',
    data() {
      return {
        tableData1:[{
          name:'出境游'},
          {
            name:'国内游'
          },
          {
            name:'海岛游'
          }
        ],
        tableData2:[{
          name:'欧美大国'},
          {
            name:'澳非探秘'
          },
          {
            name:'日港澳'
          },
          {
            name:'东南亚风情'},
        ],
        tableData3:[{
          name:'美洲'},
          {
            name:'欧洲'
          },
          {
            name:'澳洲'
          },

        ],



      }
    },
    methods: {



    }
  }
</script>

<style>
  html,body {

    overflow:hidden;

    margin:0px;
    width:100%;
    height:100%;
  }
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
    width: -webkit-fill-available;
    position:fixed; z-index:999999; top:0px;
  }

  .title {
    text-align: left;
    padding: 10px 10px 10px 20px;
    font-size: 20px;
    margin-bottom: 20px;
    font-family: stXinkai;
    font-style: normal;
  }
  .title1{
    text-align: left;
    padding:0px 0px 5px 10px
  }

  .path {
    text-align: left;
    font-size: 17px;
    line-height: 25px;
    height: 25px;
    text-align: center;
    width: -webkit-max-content;
    margin-bottom: 20px;
    background:#E9EEF3;
  }
  .page{
    position: relative;
    padding-top: 20px;
  }
  .body{
    margin-top: 5px;
    margin-bottom: 100px;
    padding: 10px 0 30px;
  }
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
    height:700px;

    position: fixed;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    height:700px;
    margin-left: 200px;
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }

</style>

