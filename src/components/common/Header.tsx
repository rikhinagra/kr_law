"use client";
import Link from "next/link";
import styled from "styled-components";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const HeaderContainer = styled.header`
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 52px 100px;
  z-index: 10;

  @media (max-width: 1024px) {
    padding: 30px 50px;
  }

  @media (max-width: 768px) {
    padding: 20px 30px;
    flex-direction: column;
    align-items: flex-start;
  }

  @media (max-width: 480px) {
    padding: 15px 20px;
  }
`;

const Logo = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
`;

const LogoTitle = styled.h1`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 30px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.05em;
  color: #fafaf9;
  margin: 0;
`;

const LogoSubtitle = styled.p`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 15px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.26em;
  color: #fafaf9;
  margin: 0;
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
    position: absolute;
    right: 30px;
    top: 20px;
    color: white;
    font-size: 24px;
  }
`;

interface NavigationProps {
  $isOpen: boolean;
}

const Navigation = styled.nav<NavigationProps>`
  display: flex;
  align-items: center;
  gap: 46px;

  @media (max-width: 768px) {
    display: ${(props) => (props.$isOpen ? "flex" : "none")};
    margin-top: 20px;
    flex-direction: column;
    align-items: flex-start;
    gap: 15px;
    width: 100%;

    background: rgba(27, 38, 50, 0.95);
    backdrop-filter: blur(8px);
    padding: 20px;
    border-radius: 10px;
    margin-top: 25px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.3);
    position: absolute;
    top: 60px;
    left: 0;
    right: 0;
    margin-left: 30px;
    margin-right: 30px;
    z-index: 20;
  }

  @media (max-width: 480px) {
    margin-left: 20px;
    margin-right: 20px;
  }
`;

const NavItem = styled.div`
  position: relative;

  @media (min-width: 769px) {
    &:hover > div {
      display: block;
    }
  }
`;

const NavLink = styled(Link)`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: -0.02em;
  color: #ffffff;
  text-decoration: none;

  &:hover {
    opacity: 0.8;
  }

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const DropdownButton = styled.button`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: -0.02em;
  color: #ffffff;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;

  &:hover {
    opacity: 0.8;
  }

  @media (max-width: 768px) {
    font-size: 16px;
    width: 100%;

    justify-content: flex-start;
  }
`;

const DropdownIcon = styled.div<{ $isOpen: boolean }>`
  display: none;
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    margin-left: 10px;
    width: 16px;
    height: 16px;
    position: relative;
    top: 0px;
  }
`;

interface DropdownMenuProps {
  $isOpen: boolean;
}

const DropdownMenu = styled.div<DropdownMenuProps>`
  position: absolute;
  top: 100%;
  left: 0;
  width: 160px;
  background: rgba(27, 38, 50, 0.5);
  backdrop-filter: blur(8.89px);
  z-index: 5;
  padding: 20px 0;

  display: none;

  @media (max-width: 768px) {
    display: ${(props) => (props.$isOpen ? "block" : "none")};
    position: relative;
    width: 100%;
    margin-top: 10px;
    padding: 0;
    background: none;
    backdrop-filter: none;
  }
`;

const DropdownList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const DropdownItem = styled.li`
  padding: 8px 12px;

  @media (max-width: 768px) {
    padding: 8px 0 8px 20px;
  }
`;

const DropdownLink = styled(Link)`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  color: #ffffff;
  text-decoration: none;
  display: block;

  &:hover {
    opacity: 0.8;
  }

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const PhoneLink = styled(NavLink)`
  text-decoration: underline;
`;

interface PracticeAreaItem {
  name: string;
  path: string;
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPracticeDropdownOpen, setIsPracticeDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const practiceAreas: PracticeAreaItem[] = [
    {
      name: "California At Fault Accident Reporting",
      path: "/california-at-fault-accidents",
    },
    { name: "Car Accidents", path: "/car-accidents" },
    { name: "Accident Lawyer", path: "/accident-lawyer" },
    { name: "Rental Car Accident", path: "/rental-car-accident" },
    { name: "Pedestrian Accident", path: "/pedestrian-accident" },
    // { name: "Airbnb Attorney", path: "/airbnb-attorney" },
    { name: "Uber Accident Lawyer", path: "/uber-accident-lawyers" },
    { name: "Wrongful Death Attorney", path: "/wrongful-death-attorney" },
    { name: "Electric Scooter Accident", path: "/electric-scooter-accident" },
  ];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsPracticeDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsPracticeDropdownOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleNavLinkClick = () => {
    setIsMenuOpen(false);
    setIsPracticeDropdownOpen(false);
  };

  return (
    <HeaderContainer>
      <Logo href="/">
        <LogoTitle>KR LAW, APC</LogoTitle>
      </Logo>

      <MobileMenuButton onClick={() => setIsMenuOpen(!isMenuOpen)}>
        ☰
      </MobileMenuButton>

      <Navigation $isOpen={isMenuOpen}>
        <NavItem ref={dropdownRef}>
          <DropdownButton
            onClick={() => setIsPracticeDropdownOpen(!isPracticeDropdownOpen)}
          >
            Practice Areas
            <DropdownIcon $isOpen={isPracticeDropdownOpen}>
              {isPracticeDropdownOpen ? (
                <Image
                  src="/images/white-close-arrow.svg"
                  alt="Close dropdown"
                  width={16}
                  height={16}
                />
              ) : (
                <Image
                  src="/images/white-open-arrow.svg"
                  alt="Open dropdown"
                  width={16}
                  height={16}
                />
              )}
            </DropdownIcon>
          </DropdownButton>

          <DropdownMenu $isOpen={isPracticeDropdownOpen}>
            <DropdownList>
              {practiceAreas.map((area, index) => (
                <DropdownItem key={index}>
                  <DropdownLink href={area.path} onClick={handleNavLinkClick}>
                    {area.name}
                  </DropdownLink>
                </DropdownItem>
              ))}
            </DropdownList>
          </DropdownMenu>
        </NavItem>

        <NavLink href="/about" onClick={handleNavLinkClick}>
          About Us
        </NavLink>
        <NavLink href="/blog" onClick={handleNavLinkClick}>
          Blog
        </NavLink>
        <PhoneLink href="tel:+12138338361" onClick={handleNavLinkClick}>
          +1 213-833-8361
        </PhoneLink>
      </Navigation>
    </HeaderContainer>
  );
}
