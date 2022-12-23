import React from "react";
import { CodeSection } from "react-code-section-lib";
import styles from "./styles.module.css";

const code = `<div id="darkblock-widget-embed" style="padding: 10px; width:100%;"></div>

<script
  id="darkblockwidget-script"
  src="widget/darkblock-widget.js"
  data-config="{
    'platform':'Tezos',
    'contractAddress': 'KT18pVpRXKPY2c4U2yFEGSH3ZnhB2kL8kwXS',
    'tokenId': '41534'}">
</script>
`;

const DownloadPage = () => {
  return (
    <div className={styles.container}>
      <h1 className="text-3xl font-bold">Download Darkblock Embed Script</h1>
      <br />

      <h2 className={styles.subTitle}>Usage</h2>

      <p>
        Import it into the root of your project and into the HTML code copy the
        following code:
      </p>

      <div className="pb-6">
        <CodeSection theme="dark" lang="html">
          {code}
        </CodeSection>
      </div>

      <p>
        Create a folder in the root of your project named darkblock or js where
        the widget will live after you have created it with the bundler, then in
        the src parameter of your script, add:
      </p>

      <div className="pb-6">
        <CodeSection theme="dark" lang="html">
          {
          `src= "/folder-name/darkblockwidget-script" // or\nsrc= "url_to_cdn" `
          }
        </CodeSection>
      </div>

      <p>The Darkblock Embed Script needs the following params</p>
      <br />

      <div className={styles.listContainer}>
        <li>
          Platform: <span className={styles.linecode}>Ethereum</span> |{" "}
          <span className={styles.linecode}>Matic (Polygon)</span> |{" "}
          <span className={styles.linecode}>Avax (Avalanche)</span> |{" "}
          <span className={styles.linecode}>Tezos</span> | {" "}
          <span className={styles.linecode}>Solana </span>
        </li>
        <li>Contract Address</li>
        <li>Token Id</li>
      </div>
      <br />

      <h2 className={styles.subTitle}>Download Darkblock Script using CDN</h2>

      <div className={styles.versionItem}>
        <h3 className={styles.smallTitle}>
          Darkblock Embed Script version 0.3.0
        </h3>

        <div className={styles.listContainer}>
          <li>
            <a href="https://main--reliable-brigadeiros-e04b05.netlify.app/darkblock-widget-latest.js">
              https://main--reliable-brigadeiros-e04b05.netlify.app/darkblock-widget-latest.js
            </a>
          </li>
          <li>
            <a href="https://main--reliable-brigadeiros-e04b05.netlify.app/darkblock-widget-latest.js">
              https://main--reliable-brigadeiros-e04b05.netlify.app/darkblock-widget-latest.js
            </a>
          </li>
          <li>
            <a href="https://main--reliable-brigadeiros-e04b05.netlify.app/darkblock-widget-latest.js">
              https://main--reliable-brigadeiros-e04b05.netlify.app/darkblock-widget-latest.js
            </a>
          </li>
        </div>
      </div>

      <div className={styles.versionItem}>
        <h3 className={styles.smallTitle}>
          Darkblock Embed Script version 0.2.0
        </h3>

        <div className={styles.listContainer}>
          <li>
            <a href="https://main--reliable-brigadeiros-e04b05.netlify.app/darkblock-widget-latest.js">
              https://main--reliable-brigadeiros-e04b05.netlify.app/darkblock-widget-latest.js
            </a>
          </li>
          <li>
            <a href="https://main--reliable-brigadeiros-e04b05.netlify.app/darkblock-widget-latest.js">
              https://main--reliable-brigadeiros-e04b05.netlify.app/darkblock-widget-latest.js
            </a>
          </li>
          <li>
            <a href="https://main--reliable-brigadeiros-e04b05.netlify.app/darkblock-widget-latest.js">
              https://main--reliable-brigadeiros-e04b05.netlify.app/darkblock-widget-latest.js
            </a>
          </li>
        </div>
      </div>

      <div className={styles.versionItem}>
        <h3 className={styles.smallTitle}>
          Darkblock Embed Script version 0.1.0
        </h3>

        <div className={styles.listContainer}>
          <li>
            <a href="https://main--reliable-brigadeiros-e04b05.netlify.app/darkblock-widget-latest.js">
              https://main--reliable-brigadeiros-e04b05.netlify.app/darkblock-widget-latest.js
            </a>
          </li>
          <li>
            <a href="https://main--reliable-brigadeiros-e04b05.netlify.app/darkblock-widget-latest.js">
              https://main--reliable-brigadeiros-e04b05.netlify.app/darkblock-widget-latest.js
            </a>
          </li>
          <li>
            <a href="https://main--reliable-brigadeiros-e04b05.netlify.app/darkblock-widget-latest.js">
              https://main--reliable-brigadeiros-e04b05.netlify.app/darkblock-widget-latest.js
            </a>
          </li>
        </div>
      </div>
    </div>
  );
};

export default DownloadPage;
