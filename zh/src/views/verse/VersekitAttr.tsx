import cn from "classnames";
import styles from "styles/Verse.module.scss";
export default function VersekitAttr() {
  return (
    <div className={cn(styles["modal-wrap"])}>
      <h1>技术参数与工作站配置要求</h1>
      <table className="rev-table">
        <tbody>
          <tr>
            <td colSpan={4} className="title">
              基本属性
            </td>
          </tr>
          <tr>
            <td className="label">外观颜色</td>
            <td className="value">白色</td>
            <td className="label">外壳材质</td>
            <td className="value">碳素钢</td>
          </tr>
          <tr>
            <td className="label">机身尺寸</td>
            <td className="value">
              502mm(长) x 502mm(宽) x 496mm(高)
              <p>实际尺寸依配置、制造工艺、测量方法的不同可能有所差异</p>
            </td>
            <td className="label">包装尺寸</td>
            <td className="value">
              620mm(长) x 620mm(宽) x 610mm(高)
              <p>实际尺寸依配置、制造工艺、测量方法的不同可能有所差异</p>
            </td>
          </tr>
          <tr>
            <td className="label">机身重量</td>
            <td className="value">
              约25.6kg
              <p>实际重量依配置、制造工艺、测量方法的不同可能有所差异</p>
            </td>
            <td className="label">带包装重量</td>
            <td className="value">
              约32kg
              <p>实际尺寸依配置、制造工艺、测量方法的不同可能有所差异</p>
            </td>
          </tr>
          <tr>
            <td className="label">类型</td>
            <td className="value">桌面放置式</td>
            <td className="label">传感器</td>
            <td className="value">2000万像素</td>
          </tr>
          <tr>
            <td className="label">扫描精度</td>
            <td className="value">约770dpi</td>
            <td className="label">扫描速度</td>
            <td className="value">
              约3-5分钟
              <p>实际尺寸依配置、制造工艺、测量方法的不同可能有所差异</p>
            </td>
          </tr>
          <tr>
            <td className="label">扫描幅画</td>
            <td className="value">约135mm x 205mm</td>
            <td className="label">最大支持材料厚度</td>
            <td className="value">约30mm</td>
          </tr>
          <tr>
            <td className="label">输出格式</td>
            <td className="value">jpg、png、u3m、u3ma、gitf、glb、admf</td>
            <td className="label">支持材料种类</td>
            <td className="value">皮革、针织、网布、烫金、荧光、多层网布等</td>
          </tr>
          <tr>
            <td colSpan={4} className="title">
              系统支持
            </td>
          </tr>
          <tr>
            <td className="label">操作系统</td>
            <td className="value">Microsoft Windows 10，64位</td>
            <td className="label">处理器</td>
            <td className="value">Intel(R) Core(TM) i7-9700 CPU(推荐)</td>
          </tr>
          <tr>
            <td className="label">显卡</td>
            <td className="value">NVIDIA Geforce GTX 2060(推荐)</td>
            <td className="label">内存(RAM)</td>
            <td className="value">32GB以上</td>
          </tr>
          <tr>
            <td className="label">显存</td>
            <td className="value">6GB以上</td>
            <td className="label">磁盘空间</td>
            <td className="value">5GB以上</td>
          </tr>
          <tr>
            <td className="label">显示器</td>
            <td className="value">
              4k屏幕，如：飞利浦PHLIPS 278E1/93，需使用DP接口或HDMI
              2.0接口，且经过颜色校正，无色差
            </td>
            <td className="label"></td>
            <td className="value"></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
