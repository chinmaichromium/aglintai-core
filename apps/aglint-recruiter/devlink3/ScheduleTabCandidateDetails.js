"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { SlotComp } from "./SlotComp";
import * as _utils from "./utils";
import _styles from "./ScheduleTabCandidateDetails.module.css";

export function ScheduleTabCandidateDetails({
  as: _Component = _Builtin.Block,
  textName = "Dianee Russel",
  textRole = "Senior software engineer",
  textLocation = "San Fransisco California",
  slotEmailPhoneIcon,
  onClickResume = {},
  textOverview = "RAMKANNAN S is a Senior DevOps Solutions Engineer with 10+ years of experience in the IT industry. He has a strong understanding of DevOps, DevSecOps, Build & Release, SRE, and JFrog Platform. He is also proficient in AWS, Azure, GCP, CI-CD, Jenkins, Gitlab, Spinnaker, Docker, Kubernetes, SSL Certs, REST API, Ansible, Terraform, Datadog, Prometheus, Grafana, Linux, GIT, Groovy, Bash Scripting, Python, JFrog Pipelines, Artifactory, XRAY, SonarQube, frogbot, ansible-vault, OWASP Top Ten, Terraform Modules, GCP - Cloud Storage, VMs, GKE, Cloud SQL, Cloud Functions, Azure - AKS, ACR, Keyvault, TrafficManager, BlobStore, SQL (PostgresQL), AWS - EC2, Route53, EKS, ECR, ELB, S3, IAM, RDS, BeanStalk.",
  slotExperienceScore,
  slotSkillScore,
  slotEducationScore,
  slotScreeningScore,
  textExperience = "The candidate's prior work experiences align closely with the job requirements, showcasing leadership, community engagement, content creation, and strategic planning, which are essential for the Head of Developer Experience role.",
  textSkill = "The candidate's prior work experiences align closely with the job requirements, showcasing leadership, community engagement, content creation, and strategic planning, which are essential for the Head of Developer Experience role.",
  textEducation = "The candidate's prior work experiences align closely with the job requirements, showcasing leadership, community engagement, content creation, and strategic planning, which are essential for the Head of Developer Experience role.",
  slotAssesmentScore,
  slotAssesmentFeedback,
  onClickDetailFeedback = {},
  slotProfileImage,
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "scheduletabcandidateinfo")}
      tag="div"
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "candidate_info")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "candidate-name")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "candidateavatar")}
            tag="div"
          >
            {slotProfileImage}
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "text-lg", "fw-semibold")}
            tag="div"
          >
            {textName}
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "cvs-intro-profile-block-copy")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "div-block-789")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "div-block-788")}
              tag="div"
            >
              <_Builtin.HtmlEmbed
                className={_utils.cx(_styles, "icons")}
                value="%3Csvg%20width%3D%2212%22%20height%3D%2216%22%20viewbox%3D%220%200%2012%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M3.9%203.25V4.3H8.1V3.25C8.08542%203.03125%207.96875%202.91458%207.75%202.9H4.25C4.03125%202.91458%203.91458%203.03125%203.9%203.25ZM3.2%204.3V3.25C3.21458%202.95833%203.31667%202.71042%203.50625%202.50625C3.71042%202.31667%203.95833%202.21458%204.25%202.2H7.75C8.04167%202.21458%208.28958%202.31667%208.49375%202.50625C8.68333%202.71042%208.78542%202.95833%208.8%203.25V4.3H10.2C10.5938%204.31458%2010.9219%204.45312%2011.1844%204.71562C11.4469%204.97812%2011.5854%205.30625%2011.6%205.7V11.3C11.5854%2011.6937%2011.4469%2012.0219%2011.1844%2012.2844C10.9219%2012.5469%2010.5938%2012.6854%2010.2%2012.7H1.8C1.40625%2012.6854%201.07812%2012.5469%200.815625%2012.2844C0.553125%2012.0219%200.414583%2011.6937%200.4%2011.3V5.7C0.414583%205.30625%200.553125%204.97812%200.815625%204.71562C1.07812%204.45312%201.40625%204.31458%201.8%204.3H3.2ZM8.45%205H3.55H1.8C1.59583%205%201.42812%205.06562%201.29687%205.19687C1.16562%205.32812%201.1%205.49583%201.1%205.7V7.8H4.25H4.95H7.05H7.75H10.9V5.7C10.9%205.49583%2010.8344%205.32812%2010.7031%205.19687C10.5719%205.06562%2010.4042%205%2010.2%205H8.45ZM10.9%208.5H7.75V9.55C7.75%209.75417%207.68438%209.92187%207.55313%2010.0531C7.42188%2010.1844%207.25417%2010.25%207.05%2010.25H4.95C4.74583%2010.25%204.57812%2010.1844%204.44687%2010.0531C4.31562%209.92187%204.25%209.75417%204.25%209.55V8.5H1.1V11.3C1.1%2011.5042%201.16562%2011.6719%201.29687%2011.8031C1.42812%2011.9344%201.59583%2012%201.8%2012H10.2C10.4042%2012%2010.5719%2011.9344%2010.7031%2011.8031C10.8344%2011.6719%2010.9%2011.5042%2010.9%2011.3V8.5ZM4.95%208.5V9.55H7.05V8.5H4.95Z%22%20fill%3D%22%2368737D%22%2F%3E%0A%3C%2Fsvg%3E"
              />
              <_Builtin.Block
                className={_utils.cx(_styles, "text-grey-600")}
                tag="div"
              >
                {textRole}
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "div-block-788")}
              tag="div"
            >
              <_Builtin.HtmlEmbed
                className={_utils.cx(_styles, "icons")}
                value="%3Csvg%20width%3D%229%22%20height%3D%2216%22%20viewbox%3D%220%200%209%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M8%206.4C7.97083%205.40833%207.62813%204.58437%206.97188%203.92812C6.31563%203.27187%205.49167%202.92917%204.5%202.9C3.50833%202.92917%202.68437%203.27187%202.02812%203.92812C1.37187%204.58437%201.02917%205.40833%201%206.4C1%206.75%201.12396%207.20937%201.37187%207.77812C1.61979%208.36146%201.93333%208.96667%202.3125%209.59375C2.69167%2010.2062%203.07812%2010.775%203.47187%2011.3C3.86562%2011.8396%204.20833%2012.2917%204.5%2012.6563C4.79167%2012.2917%205.13438%2011.8396%205.52813%2011.3C5.92188%2010.775%206.30833%2010.2062%206.6875%209.59375C7.08125%208.96667%207.40208%208.36146%207.65%207.77812C7.88333%207.20937%208%206.75%208%206.4ZM8.7%206.4C8.67083%207.05625%208.4375%207.81458%208%208.675C7.54792%209.53542%207.0375%2010.3667%206.46875%2011.1687C5.9%2011.9854%205.41875%2012.6344%205.025%2013.1156C4.87917%2013.2906%204.70417%2013.3781%204.5%2013.3781C4.29583%2013.3781%204.12083%2013.2906%203.975%2013.1156C3.58125%2012.6344%203.1%2011.9854%202.53125%2011.1687C1.9625%2010.3667%201.45208%209.53542%201%208.675C0.5625%207.81458%200.329166%207.05625%200.3%206.4C0.329166%205.20417%200.7375%204.2125%201.525%203.425C2.3125%202.6375%203.30417%202.22917%204.5%202.2C5.69583%202.22917%206.6875%202.6375%207.475%203.425C8.2625%204.2125%208.67083%205.20417%208.7%206.4ZM3.45%206.4C3.46458%206.79375%203.63958%207.1%203.975%207.31875C4.325%207.49375%204.675%207.49375%205.025%207.31875C5.36042%207.1%205.53542%206.79375%205.55%206.4C5.53542%206.00625%205.36042%205.7%205.025%205.48125C4.675%205.30625%204.325%205.30625%203.975%205.48125C3.63958%205.7%203.46458%206.00625%203.45%206.4ZM4.5%208.15C3.84375%208.13542%203.34062%207.84375%202.99062%207.275C2.66979%206.69167%202.66979%206.10833%202.99062%205.525C3.34062%204.95625%203.84375%204.66458%204.5%204.65C5.15625%204.66458%205.65938%204.95625%206.00938%205.525C6.33021%206.10833%206.33021%206.69167%206.00938%207.275C5.65938%207.84375%205.15625%208.13542%204.5%208.15Z%22%20fill%3D%22%2368737D%22%2F%3E%0A%3C%2Fsvg%3E"
              />
              <_Builtin.Block
                className={_utils.cx(_styles, "text-grey-600")}
                tag="div"
              >
                {textLocation}
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "contact-details")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "email-phone-linkedin")}
              tag="div"
            >
              {slotEmailPhoneIcon ?? (
                <SlotComp componentNeme="Email Linkedin" />
              )}
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "resume-candidate-details")}
              tag="div"
              {...onClickResume}
            >
              <_Builtin.HtmlEmbed
                className={_utils.cx(_styles, "icons")}
                value="%3Csvg%20width%3D%2212%22%20height%3D%2212%22%20viewbox%3D%220%200%2012%2012%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M1.5%201.5C1.51562%201.07812%201.66406%200.726562%201.94531%200.445312C2.22656%200.164062%202.57812%200.015625%203%200H6.75V3C6.75%203.21875%206.82031%203.39844%206.96094%203.53906C7.10156%203.67969%207.28125%203.75%207.5%203.75H10.5V10.5C10.4844%2010.9219%2010.3359%2011.2734%2010.0547%2011.5547C9.77344%2011.8359%209.42188%2011.9844%209%2012H3C2.57812%2011.9844%202.22656%2011.8359%201.94531%2011.5547C1.66406%2011.2734%201.51562%2010.9219%201.5%2010.5V1.5ZM10.5%203H7.5V0L10.5%203Z%22%20fill%3D%22%230F3554%22%2F%3E%0A%3C%2Fsvg%3E"
              />
              <_Builtin.Block
                className={_utils.cx(_styles, "text-sm-3", "text-blue-800")}
                tag="div"
              >
                {"Resume"}
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "overview_block")}
        tag="div"
      >
        <_Builtin.Block className={_utils.cx(_styles, "title_flex")} tag="div">
          <_Builtin.HtmlEmbed value="%3Csvg%20width%3D%2212%22%20height%3D%2212%22%20viewbox%3D%220%200%2012%2012%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M7.6875%201.99219L9%201.5L9.49219%200.1875C9.53906%200.0625%209.625%200%209.75%200C9.875%200%209.96094%200.0625%2010.0078%200.1875L10.5%201.5L11.8359%201.99219C11.9453%202.03906%2012%202.125%2012%202.25C12%202.375%2011.9453%202.46094%2011.8359%202.50781L10.5%203L10.0078%204.33594C9.96094%204.44531%209.875%204.5%209.75%204.5C9.625%204.5%209.53906%204.44531%209.49219%204.33594L9%203L7.6875%202.50781C7.5625%202.46094%207.5%202.375%207.5%202.25C7.5%202.125%207.5625%202.03906%207.6875%201.99219ZM0.210938%205.625L0.609375%205.4375L0.820312%205.34375L2.88281%204.38281L3.84375%202.32031L3.86719%202.29688L3.9375%202.10938L4.125%201.71094C4.20312%201.57031%204.32031%201.5%204.47656%201.5C4.63281%201.5%204.74219%201.57031%204.80469%201.71094L4.99219%202.10938L5.08594%202.32031L6.04688%204.38281L8.10938%205.34375L8.13281%205.36719L8.32031%205.4375L8.71875%205.625C8.85938%205.70312%208.92969%205.82031%208.92969%205.97656C8.92969%206.13281%208.85938%206.24219%208.71875%206.30469L8.32031%206.49219L8.13281%206.58594H8.10938L6.04688%207.54688L5.08594%209.60938V9.63281L4.99219%209.82031L4.80469%2010.2188C4.72656%2010.3594%204.61719%2010.4297%204.47656%2010.4297C4.32031%2010.4297%204.20312%2010.3594%204.125%2010.2188L3.9375%209.82031L3.84375%209.63281V9.60938L2.88281%207.54688L0.820312%206.58594H0.796875L0.609375%206.49219L0.210938%206.30469C0.0703125%206.24219%200%206.13281%200%205.97656C0%205.82031%200.0703125%205.70312%200.210938%205.625ZM2.15625%205.97656L3.375%206.51562C3.60938%206.64062%203.78906%206.82812%203.91406%207.07812L4.47656%208.27344L5.01562%207.07812C5.14062%206.82812%205.32812%206.64062%205.57812%206.51562L6.77344%205.97656L5.57812%205.41406C5.32812%205.28906%205.14062%205.10156%205.01562%204.85156L4.47656%203.65625L3.91406%204.85156C3.78906%205.10156%203.60938%205.28906%203.375%205.41406L2.15625%205.97656ZM9%209L9.49219%207.6875C9.53906%207.5625%209.625%207.5%209.75%207.5C9.875%207.5%209.96094%207.5625%2010.0078%207.6875L10.5%209L11.8359%209.49219C11.9453%209.53906%2012%209.625%2012%209.75C12%209.875%2011.9453%209.96094%2011.8359%2010.0078L10.5%2010.5L10.0078%2011.8359C9.96094%2011.9453%209.875%2012%209.75%2012C9.625%2012%209.53906%2011.9453%209.49219%2011.8359L9%2010.5L7.6875%2010.0078C7.5625%209.96094%207.5%209.875%207.5%209.75C7.5%209.625%207.5625%209.53906%207.6875%209.49219L9%209Z%22%20fill%3D%22%23012B30%22%2F%3E%0A%3C%2Fsvg%3E" />
          <_Builtin.Block
            className={_utils.cx(_styles, "fw-semibold")}
            tag="div"
          >
            {"Overview"}
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block tag="div">{textOverview}</_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "analysisc_block")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "div-block-774")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "div-block-781")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "div-block-773")}
              tag="div"
            >
              <_Builtin.HtmlEmbed
                className={_utils.cx(_styles, "icons")}
                value="%3Csvg%20width%3D%2214%22%20height%3D%2212%22%20viewbox%3D%220%200%2014%2012%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M12.7188%202.08594L8.96875%205.08594C8.67188%205.30469%208.36719%205.3125%208.05469%205.10938L5.52344%203.21094L2.21875%205.83594C2.04688%205.96094%201.85938%206.01562%201.65625%206C1.46875%205.96875%201.30469%205.875%201.16406%205.71875C1.03906%205.54688%200.984375%205.35938%201%205.15625C1.03125%204.96875%201.125%204.80469%201.28125%204.66406L5.03125%201.66406C5.32812%201.44531%205.63281%201.4375%205.94531%201.64062L8.47656%203.5625L11.7812%200.914062C11.9531%200.789063%2012.1406%200.734375%2012.3438%200.75C12.5312%200.78125%2012.6953%200.875%2012.8359%201.03125C12.9609%201.20312%2013.0156%201.39062%2013%201.59375C12.9688%201.78125%2012.875%201.94531%2012.7188%202.08594ZM4.75%206C4.75%205.78125%204.82031%205.60156%204.96094%205.46094C5.10156%205.32031%205.28125%205.25%205.5%205.25C5.71875%205.25%205.89844%205.32031%206.03906%205.46094C6.17969%205.60156%206.25%205.78125%206.25%206V10.5C6.25%2010.7188%206.17969%2010.8984%206.03906%2011.0391C5.89844%2011.1797%205.71875%2011.25%205.5%2011.25C5.28125%2011.25%205.10156%2011.1797%204.96094%2011.0391C4.82031%2010.8984%204.75%2010.7188%204.75%2010.5V6ZM1.75%208.25C1.75%208.03125%201.82031%207.85156%201.96094%207.71094C2.10156%207.57031%202.28125%207.5%202.5%207.5C2.71875%207.5%202.89844%207.57031%203.03906%207.71094C3.17969%207.85156%203.25%208.03125%203.25%208.25V10.5C3.25%2010.7188%203.17969%2010.8984%203.03906%2011.0391C2.89844%2011.1797%202.71875%2011.25%202.5%2011.25C2.28125%2011.25%202.10156%2011.1797%201.96094%2011.0391C1.82031%2010.8984%201.75%2010.7188%201.75%2010.5V8.25ZM8.5%206.75C8.71875%206.75%208.89844%206.82031%209.03906%206.96094C9.17969%207.10156%209.25%207.28125%209.25%207.5V10.5C9.25%2010.7188%209.17969%2010.8984%209.03906%2011.0391C8.89844%2011.1797%208.71875%2011.25%208.5%2011.25C8.28125%2011.25%208.10156%2011.1797%207.96094%2011.0391C7.82031%2010.8984%207.75%2010.7188%207.75%2010.5V7.5C7.75%207.28125%207.82031%207.10156%207.96094%206.96094C8.10156%206.82031%208.28125%206.75%208.5%206.75ZM10.75%206C10.75%205.78125%2010.8203%205.60156%2010.9609%205.46094C11.1016%205.32031%2011.2812%205.25%2011.5%205.25C11.7188%205.25%2011.8984%205.32031%2012.0391%205.46094C12.1797%205.60156%2012.25%205.78125%2012.25%206V10.5C12.25%2010.7188%2012.1797%2010.8984%2012.0391%2011.0391C11.8984%2011.1797%2011.7188%2011.25%2011.5%2011.25C11.2812%2011.25%2011.1016%2011.1797%2010.9609%2011.0391C10.8203%2010.8984%2010.75%2010.7188%2010.75%2010.5V6Z%22%20fill%3D%22%232F3941%22%2F%3E%0A%3C%2Fsvg%3E"
              />
              <_Builtin.Block
                className={_utils.cx(_styles, "fw-semibold")}
                tag="div"
              >
                {"Analysis"}
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "match-jd-wrap")}
              tag="div"
            >
              <_Builtin.Block tag="div">{"Good match - 76%"}</_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "div-block-779")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "div-block-778")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "div-block-777")}
              tag="div"
            >
              <_Builtin.Block tag="div">{"Experience"}</_Builtin.Block>
              <_Builtin.Block tag="div">
                {slotExperienceScore ?? <SlotComp componentNeme="Score" />}
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "text-grey-600")}
              tag="div"
            >
              {textExperience}
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "div-block-778")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "div-block-777")}
              tag="div"
            >
              <_Builtin.Block tag="div">{"Skill"}</_Builtin.Block>
              <_Builtin.Block tag="div">
                {slotSkillScore ?? <SlotComp componentNeme="Skill Score" />}
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "text-grey-600")}
              tag="div"
            >
              {textSkill}
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "div-block-778")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "div-block-777")}
              tag="div"
            >
              <_Builtin.Block tag="div">{"Education"}</_Builtin.Block>
              <_Builtin.Block tag="div">
                {slotEducationScore ?? <SlotComp componentNeme="Score" />}
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "text-grey-600")}
              tag="div"
            >
              {textEducation}
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "screening_block")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "screening_header_wrapper")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "div-block-807")}
            tag="div"
          >
            <_Builtin.HtmlEmbed
              className={_utils.cx(_styles, "icons")}
              value="%3Csvg%20width%3D%2215%22%20height%3D%2215%22%20viewbox%3D%220%200%2015%2015%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M1.875%209C1.89062%209.23438%202.01562%209.35938%202.25%209.375C2.48438%209.35938%202.60938%209.23438%202.625%209C2.60938%208.76562%202.48438%208.64062%202.25%208.625C2.01562%208.64062%201.89062%208.76562%201.875%209ZM3.75%209C3.73438%209.5625%203.48438%209.99219%203%2010.2891C2.5%2010.5703%202%2010.5703%201.5%2010.2891C1.01562%209.99219%200.765625%209.5625%200.75%209C0.765625%208.4375%201.01562%208.00781%201.5%207.71094C2%207.42969%202.5%207.42969%203%207.71094C3.48438%208.00781%203.73438%208.4375%203.75%209ZM1.5%2011.25H3C3.42188%2011.2656%203.77344%2011.4141%204.05469%2011.6953C4.33594%2011.9766%204.48438%2012.3281%204.5%2012.75C4.5%2012.9688%204.42969%2013.1484%204.28906%2013.2891C4.14844%2013.4297%203.96875%2013.5%203.75%2013.5H0.75C0.53125%2013.5%200.351562%2013.4297%200.210938%2013.2891C0.0703125%2013.1484%200%2012.9688%200%2012.75C0.015625%2012.3281%200.164062%2011.9766%200.445312%2011.6953C0.726562%2011.4141%201.07812%2011.2656%201.5%2011.25ZM7.125%209C7.14062%209.23438%207.26562%209.35938%207.5%209.375C7.73438%209.35938%207.85938%209.23438%207.875%209C7.85938%208.76562%207.73438%208.64062%207.5%208.625C7.26562%208.64062%207.14062%208.76562%207.125%209ZM9%209C8.98438%209.5625%208.73438%209.99219%208.25%2010.2891C7.75%2010.5703%207.25%2010.5703%206.75%2010.2891C6.26562%209.99219%206.01562%209.5625%206%209C6.01562%208.4375%206.26562%208.00781%206.75%207.71094C7.25%207.42969%207.75%207.42969%208.25%207.71094C8.73438%208.00781%208.98438%208.4375%209%209ZM6.75%2011.25H8.25C8.67188%2011.2656%209.02344%2011.4141%209.30469%2011.6953C9.58594%2011.9766%209.73438%2012.3281%209.75%2012.75C9.75%2012.9688%209.67969%2013.1484%209.53906%2013.2891C9.39844%2013.4297%209.21875%2013.5%209%2013.5H6C5.78125%2013.5%205.60156%2013.4297%205.46094%2013.2891C5.32031%2013.1484%205.25%2012.9688%205.25%2012.75C5.26562%2012.3281%205.41406%2011.9766%205.69531%2011.6953C5.97656%2011.4141%206.32812%2011.2656%206.75%2011.25ZM12.75%208.625C12.5156%208.64062%2012.3906%208.76562%2012.375%209C12.3906%209.23438%2012.5156%209.35938%2012.75%209.375C12.9844%209.35938%2013.1094%209.23438%2013.125%209C13.1094%208.76562%2012.9844%208.64062%2012.75%208.625ZM12.75%2010.5C12.1875%2010.4844%2011.7578%2010.2344%2011.4609%209.75C11.1797%209.25%2011.1797%208.75%2011.4609%208.25C11.7578%207.76562%2012.1875%207.51562%2012.75%207.5C13.3125%207.51562%2013.7422%207.76562%2014.0391%208.25C14.3203%208.75%2014.3203%209.25%2014.0391%209.75C13.7422%2010.2344%2013.3125%2010.4844%2012.75%2010.5ZM10.5%2012.75C10.5156%2012.3281%2010.6641%2011.9766%2010.9453%2011.6953C11.2266%2011.4141%2011.5781%2011.2656%2012%2011.25H13.5C13.9219%2011.2656%2014.2734%2011.4141%2014.5547%2011.6953C14.8359%2011.9766%2014.9844%2012.3281%2015%2012.75C15%2012.9688%2014.9297%2013.1484%2014.7891%2013.2891C14.6484%2013.4297%2014.4688%2013.5%2014.25%2013.5H11.25C11.0312%2013.5%2010.8516%2013.4297%2010.7109%2013.2891C10.5703%2013.1484%2010.5%2012.9688%2010.5%2012.75ZM12.75%202.625C12.9844%202.64063%2013.1094%202.76562%2013.125%203V6.77344C13.5625%206.85156%2013.9375%207.03125%2014.25%207.3125V3C14.2344%202.57812%2014.0859%202.22656%2013.8047%201.94531C13.5234%201.66406%2013.1719%201.51563%2012.75%201.5H2.25C1.82812%201.51563%201.47656%201.66406%201.19531%201.94531C0.914062%202.22656%200.765625%202.57812%200.75%203V7.3125C1.0625%207.03125%201.4375%206.85156%201.875%206.77344V3C1.89062%202.76562%202.01562%202.64063%202.25%202.625H12.75Z%22%20fill%3D%22%232F3941%22%2F%3E%0A%3C%2Fsvg%3E"
            />
            <_Builtin.Block
              className={_utils.cx(_styles, "fw-semibold")}
              tag="div"
            >
              {"Screening"}
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "div-block-806")}
            tag="div"
          >
            {slotScreeningScore ?? <SlotComp componentNeme="Score" />}
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "schedule-tab-wrap-ana")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "div-block-1272")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "div-block-1269")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "div-block-1270")}
              tag="div"
            >
              <_Builtin.HtmlEmbed
                className={_utils.cx(_styles, "icons")}
                value="%3Csvg%20width%3D%2215%22%20height%3D%2216%22%20viewbox%3D%220%200%2015%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M3.125%203C2.86979%203%202.66016%203.08203%202.49609%203.24609C2.33203%203.41016%202.25%203.61979%202.25%203.875V12.625C2.25%2012.8802%202.33203%2013.0898%202.49609%2013.2539C2.66016%2013.418%202.86979%2013.5%203.125%2013.5H11.875C12.1302%2013.5%2012.3398%2013.418%2012.5039%2013.2539C12.668%2013.0898%2012.75%2012.8802%2012.75%2012.625V3.875C12.75%203.61979%2012.668%203.41016%2012.5039%203.24609C12.3398%203.08203%2012.1302%203%2011.875%203H3.125ZM1.375%203.875C1.39323%203.38281%201.56641%202.97266%201.89453%202.64453C2.22266%202.31641%202.63281%202.14323%203.125%202.125H11.875C12.3672%202.14323%2012.7773%202.31641%2013.1055%202.64453C13.4336%202.97266%2013.6068%203.38281%2013.625%203.875V12.625C13.6068%2013.1172%2013.4336%2013.5273%2013.1055%2013.8555C12.7773%2014.1836%2012.3672%2014.3568%2011.875%2014.375H3.125C2.63281%2014.3568%202.22266%2014.1836%201.89453%2013.8555C1.56641%2013.5273%201.39323%2013.1172%201.375%2012.625V3.875ZM5.75%208.46875H7.0625C7.22656%208.46875%207.35417%208.53255%207.44531%208.66016C7.51823%208.80599%207.52734%208.95182%207.47266%209.09766L6.92578%2010.2461L9.25%208.03125H7.9375C7.77344%208.03125%207.65495%207.96745%207.58203%207.83984C7.49089%207.69401%207.48177%207.54818%207.55469%207.40234L8.07422%206.25391L5.75%208.46875ZM9.08594%204.3125C9.28646%204.33073%209.44141%204.41276%209.55078%204.55859C9.64193%204.72266%209.65104%204.90495%209.57812%205.10547L8.62109%207.15625H9.96094C10.3255%207.19271%2010.526%207.39323%2010.5625%207.75781C10.5625%207.92188%2010.4987%208.05859%2010.3711%208.16797L6.29688%2012.0508C6.1875%2012.1419%206.0599%2012.1875%205.91406%2012.1875C5.71354%2012.1693%205.55859%2012.0872%205.44922%2011.9414C5.35807%2011.7773%205.34896%2011.6042%205.42188%2011.4219L6.37891%209.34375H5.03906C4.67448%209.30729%204.47396%209.10677%204.4375%208.74219C4.4375%208.57812%204.5013%208.44141%204.62891%208.33203L8.70312%204.47656C8.8125%204.36719%208.9401%204.3125%209.08594%204.3125Z%22%20fill%3D%22%232F3941%22%2F%3E%0A%3C%2Fsvg%3E"
              />
              <_Builtin.Block
                className={_utils.cx(_styles, "fw-semibold")}
                tag="div"
              >
                {"Assesment"}
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block tag="div">
              {slotAssesmentScore ?? <SlotComp componentNeme="Score" />}
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "cvs-score-block")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "cvs-score-details-wrapper")}
            tag="div"
          >
            {slotAssesmentFeedback}
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "cvs-score-detail-btn", "clickable")}
            tag="div"
            {...onClickDetailFeedback}
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "text-blue-600-2")}
              tag="div"
            >
              {"Detailed feedback"}
            </_Builtin.Block>
            <_Builtin.Block tag="div">
              <_Builtin.HtmlEmbed
                className={_utils.cx(_styles, "icon-embed")}
                value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%2213%22%20viewbox%3D%220%200%2012%2013%22%20fill%3D%22none%22%3E%0A%20%20%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M11.625%202.7478C11.8091%202.7478%2011.9622%202.88046%2011.994%203.0554L12%203.1228V6.1228C12%206.32991%2011.8321%206.4978%2011.625%206.4978C11.4409%206.4978%2011.2878%206.36515%2011.256%206.19021L11.25%206.1228V4.0273L7.39017%207.88797C7.25999%208.01814%207.05792%208.03261%206.91177%207.93136L6.85983%207.88797L4.875%205.90305L0.640165%2010.138C0.50999%2010.2681%200.307922%2010.2826%200.161771%2010.1814L0.109835%2010.138C-0.0203398%2010.0078%20-0.0348037%209.80572%200.0664434%209.65957L0.109835%209.60764L4.60984%205.10764C4.74001%204.97746%204.94208%204.963%205.08823%205.06425L5.14016%205.10764L7.125%207.09255L10.719%203.4978H8.625C8.4409%203.4978%208.28779%203.36515%208.25604%203.19021L8.25%203.1228C8.25%202.93871%208.38266%202.7856%208.55759%202.75384L8.625%202.7478H11.625Z%22%20fill%3D%22%231F73B7%22%2F%3E%0A%3C%2Fsvg%3E"
              />
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
