"use client";

import { FacebookShareButton, FacebookIcon } from "next-share";
import { TwitterShareButton, TwitterIcon } from "next-share";
import { WhatsappShareButton, WhatsappIcon } from "next-share";
import { LinkedinShareButton, LinkedinIcon } from "next-share";
import { EmailShareButton, EmailIcon } from "next-share";

import styles from "./sharewidget-styles.module.scss";

interface ShareWidgetProps {
  link: string;
  desc: string;
}

export default function ShareWidget({ link, desc }: ShareWidgetProps) {
  return (
    <div className={styles.share_widget}>
      <FacebookShareButton url={link} quote={desc} blankTarget={true}>
        <FacebookIcon size={32} round />
      </FacebookShareButton>

      <TwitterShareButton url={link} title={desc}>
        <TwitterIcon size={32} round />
      </TwitterShareButton>

      <WhatsappShareButton url={link} title={desc} separator=":: ">
        <WhatsappIcon size={32} round />
      </WhatsappShareButton>

      <LinkedinShareButton url={link} title={desc}>
        <LinkedinIcon size={32} round />
      </LinkedinShareButton>

      <EmailShareButton url={link} subject={desc}>
        <EmailIcon size={32} round bgStyle={{ backgroundColor: "#111111" }} />
      </EmailShareButton>
    </div>
  );
}
