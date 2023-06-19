import React, { useState } from "react";
import styles from "./styles";
import Image from "next/image";
import { AiFillLinkedin } from "react-icons/ai";
import Link from "next/link";
import image from "next/image";
import { title } from "process";
import { Modal } from "react-bootstrap";

const MemberCard = ({
  designation,
  linkedIn,
  caption,
  image,
  subtitle,
  description,
  modalTitle,
  title
}: {
  designation: string;
  title: string;
  linkedIn: string;
  caption: string;
  image: string;
  subtitle: string;
  description: string;
  modalTitle: string;
}) => {
  const [isActive, setActive] = useState(false);
  // useScrollHidden(isActive);

  const joiningDate = new Date();
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const year = joiningDate.getFullYear();
  const dateInNum = joiningDate.getDate();
  const month = months[joiningDate.getMonth() + 1];
  return (
    <>
      <div className={styles.memberCard.wrapper}>
        <div className={styles.memberCard.onHoverDesignation}>
          {designation.toUpperCase()}
        </div>
        <div
          className={styles.memberCard.imageWrapper}
          onClick={() => setActive(true)}
        >
          <Image
            src={image}
            height={206}
            width={152}
            alt="member"
            className={styles.memberCard.image}
          />
        </div>
        <div className={styles.memberCard.caption}>
          <span className="group-hover:hidden">{caption}</span>
          <span className="hidden group-hover:block">
            {/* {dateInNum} {month} {year} */}asdasd
          </span>
        </div>
        <div className="relative px-3">
          <div className={styles.memberCard.title}>
            {title}
            {linkedIn && (
              <Link className="ml-auto" href={linkedIn || ""}>
                <AiFillLinkedin className={styles.memberCard.linkedIn} />
              </Link>
            )}
          </div>
          <div className={styles.memberCard.designation}>{designation}</div>
          <div
            className={styles.memberCard.border}
            style={{ borderTop: "0.389175px solid rgba(6, 20, 35, 0.2)" }}
          ></div>
          <div className={styles.memberCard.subtitle}>{subtitle}</div>
          <div className={styles.memberCard.description}>{description}</div>
        </div>
      </div>
      {isActive ? (
        <>
          <Modal
            className={styles.memberCard.modal.wrapper("!bg-[#E9F1F8]")}
            onClose={() => setActive(false)}
            closeBtnClass="sm:hidden m-2"
          >
            <div className="hidden md:block">
              <div className={styles.memberCard.modal.heading}>
                {modalTitle}
              </div>
              <div className="grid grid-cols-5 gap-x-5 md:min-h-[400px]">
                <div className={styles.memberCard.modal.contentWrapper}>
                  <div className={styles.memberCard.modal.description}>
                    {description}
                  </div>
                  {linkedIn && (
                    <Link href={linkedIn || ""}>
                      <AiFillLinkedin
                        size={33}
                        className="mt-6 cursor-pointer text-blue-500"
                      />
                    </Link>
                  )}
                  <div className={styles.memberCard.modal.footerTitle}>
                    {title}
                  </div>
                </div>
                <div className="relative col-span-2">
                  <Image
                    src={image}
                    height={333}
                    width={450}
                    alt="member"
                    className={`${styles.memberCard.modal.image} h-full`}
                  />
                </div>
              </div>
            </div>

            <div className={`${styles.memberCard.modal.mobileWrapper}`}>
              <Image
                src={image}
                height={238}
                width={176}
                alt="member"
                className="!h-[238px] !w-[176px]"
              />
              <div className={styles.memberCard.modal.mobileTitle}>
                {modalTitle}
              </div>
              <div className={styles.memberCard.modal.descriptionMobile}>
                {description}
              </div>
            </div>

            <div className="mt-10 md:mt-0">
              {linkedIn && (
                <Link href={linkedIn || ""}>
                  <AiFillLinkedin
                    size={25}
                    className={styles.memberCard.modal.linkedInMobile}
                  />
                </Link>
              )}
              <div className={styles.memberCard.modal.footerMobileTitle}>
                {title}
              </div>
            </div>
          </Modal>
        </>
      ) : null}
    </>
  );
};

export default MemberCard;
