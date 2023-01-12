import G6, { G6Event, IG6GraphEvent } from "@antv/g6";
import { useEffect } from "react";
import styles from "styles/Studio.module.scss";
export default function Relation() {
  useEffect(() => {
    init();
  }, []);
  const init = () => {
    const container = document.getElementById("relation");
    if (container?.innerHTML != "") {
      return;
    }
    const width = container?.scrollWidth;
    const height = 900;

    G6.registerNode(
      "dom-node",
      {
        draw: (cfg, group) => {
          let labelPos = [15, -40];
          let desPos = [45, -40];
          let textAlign = "right";
          if (cfg?.align === "right") {
            labelPos = [15, 40];
            desPos = [45, 40];
            textAlign = "left";
          }
          group?.addShape("text", {
            attrs: {
              y: labelPos[0],
              x: labelPos[1],
              text: `${cfg?.label}`,
              tag: `${cfg?.tag}`,
              fill: "white",
              fontWeight: 600,
              fontSize: 30,
              textAlign: textAlign === "left" ? "left" : "right",
            },
            name: "text-shape",
          });
          group?.addShape("text", {
            attrs: {
              y: desPos[0],
              x: desPos[1],
              text: `${cfg?.description}`,
              tag: `${cfg?.tag}`,
              fill: "#A76FD8",
              fontWeight: 300,
              fontSize: 24,
              textAlign: textAlign === "left" ? "left" : "right",
            },
            name: "text-shape",
          });
          const g = group?.addShape("circle", {
            attrs: {
              r: 20,
              fill: "white",
            },
            name: "dom-node-keyShape",
            draggable: false,
          });
          return g!;
        },
      },
      "single-node"
    );
    const graph = new G6.Graph({
      container: "relation",
      width,
      height,
      //renderer: "svg",
      layout: {
        type: "force",
        preventOverlap: true,
        nodeSpacing: 100,
        linkDistance: 100,
      },

      defaultEdge: {
        color: "rgba(255, 255, 255, 0.4)",
      },
      modes: {
        default: ["drag-canvas"],
      },
    });

    const data = {
      nodes: [
        {
          id: "node0",
          size: 280,
          label: "Studio",
          color: "#A76FD8",
          style: {
            fill: "#A76FD8",
          },
          labelCfg: {
            style: {
              fill: "white",
              fontSize: 50,
            },
          },
        },
        {
          id: "node1",
          type: "dom-node",
          label: "使用Trend",
          description: "精准企划分析",
          align: "left",
          tag: "trends",
          x: 100,
        },
        {
          id: "node2",
          type: "dom-node",
          label: "使用Library",
          description: "管理数字资产",
          align: "right",
          tag: "library",
          x: 1000,
          y: 100,
        },
        {
          id: "node3",
          type: "dom-node",
          label: "使用Manager",
          description: "可视化管理项目",
          align: "right",
          tag: "manager",
          x: 200,
          y: 10,
        },
        {
          id: "node4",
          type: "dom-node",
          label: "使用KicksCAD",
          description: "快速创建鞋模",
          align: "right",
          tag: "cad",
          x: 1000,
          y: 200,
        },
        {
          id: "node5",
          type: "dom-node",
          label: "使用Versebook",
          description: "获取海量素材",
          align: "right",
          tag: "versebook",
          x: 200,
          y: 450,
        },
      ],
      edges: [
        { source: "node0", target: "node1" },
        { source: "node0", target: "node2" },
        { source: "node0", target: "node3" },
        { source: "node0", target: "node4" },
        { source: "node0", target: "node5" },
      ],
    };
    const nodes = data.nodes;
    graph.data({
      nodes,
      edges: data.edges.map(function (edge, i) {
        return Object.assign({}, edge);
      }),
    });
    graph.render();

    graph.on("node:dragstart", function (e) {
      graph.layout();
      refreshDragedNodePosition(e);
    });
    graph.on("node:drag", function (e) {
      refreshDragedNodePosition(e);
    });
    graph.on("node:dragend", function (e) {
      if (e.item) {
        e.item.get("model").fx = null;
        e.item.get("model").fy = null;
      }
    });

    graph.on('node:click', function (e) {
      if (!e.item || !e.item.get("model").tag) {
        return;
      }
      const tag = e.item.get("model").tag
      let url = "";
      switch (tag) {
        case "trends":
          url = "/trends.html"
          break;
        case "library":
          url = "/library.html"
          break;
        case "cad":
          url = "/cad.html"
          break;
        case "manager":
          url = "/fim/manager.html"
          break;
        case "versebook":
          url = "/verse/versebook.html"
          break;
        default:
          break;
      }
      if (!url) {
        return
      }
      location.href = url
    });

    if (typeof window !== "undefined")
      window.onresize = () => {
        if (!graph || graph.get("destroyed")) return;
        if (!container || !container.scrollWidth || !container.scrollHeight)
          return;
        graph.changeSize(container.scrollWidth, container.scrollHeight);
      };

    function refreshDragedNodePosition(e: IG6GraphEvent) {
      const model = e.item?.get("model");
      model.fx = e.x;
      model.fy = e.y;
    }
  };
  return <div className={styles.relation__wrap} id="relation"></div>;
}
