"use client";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

export interface ServiceItemProps {
  name: string;
  link: string;
}

const ServiceItemContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  padding: 1px 5px;
  gap: 8px;
  width: 100%;
  height: auto;
  min-height: 52px;
  border-bottom: 1px solid #000000;
  margin-bottom: 16px;
  transition: all 0.3s ease;

  &:hover {
    background-color: rgba(27, 38, 50, 0.05);
    padding-left: 10px;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    margin-bottom: 14px;
  }

  @media (max-width: 768px) {
    margin-bottom: 12px;
  }
`;

const ServiceItemInner = styled(Link)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 8px 5px;
  width: 100%;
  height: 50px;
  text-decoration: none;
`;

const ServiceName = styled.span`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
  display: flex;
  align-items: center;
  letter-spacing: -0.02em;
  color: #000000;
  transition: color 0.3s ease;

  ${ServiceItemInner}:hover & {
    color: #1b2632;
    font-weight: 500;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    font-size: 18px;
    line-height: 28px;
  }

  @media (max-width: 768px) {
    font-size: 17px;
    line-height: 26px;
  }
`;

const ArrowIcon = styled(Image)`
  width: 37px;
  height: 10px;
  transition: transform 0.3s ease, opacity 0.3s ease;
  opacity: 0.8;

  ${ServiceItemInner}:hover & {
    transform: translateX(5px);
    opacity: 1;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    width: 33px;
    height: 9px;
  }

  @media (max-width: 768px) {
    width: 30px;
    height: 8px;
  }
`;

export default function ServiceItem({ name, link }: ServiceItemProps) {
  return (
    <ServiceItemContainer>
      <ServiceItemInner href={link}>
        <ServiceName>{name}</ServiceName>
        <ArrowIcon
          src="/images/Arrow.svg"
          alt="Arrow"
          width={37}
          height={10}
          priority
        />
      </ServiceItemInner>
    </ServiceItemContainer>
  );
}
