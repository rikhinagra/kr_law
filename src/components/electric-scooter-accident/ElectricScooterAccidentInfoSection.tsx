"use client";
import styled from "styled-components";

const SectionContainer = styled.section`
  position: relative;
  width: 100%;
  /* background: #ffffff; */

  overflow: hidden;

  @media (min-width: 1025px) {
    padding: 40px 0;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    padding: 30px 0;
  }

  @media (max-width: 768px) {
    padding: 20px 0;
  }
`;

const ContentWrapper = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  @media (min-width: 1025px) {
    padding: 0 20px;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    padding: 0 30px;
  }

  @media (max-width: 768px) {
    padding: 0 16px;
  }
`;

const Question = styled.h2`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 45px;
  letter-spacing: -0.02em;
  text-decoration-line: underline;
  color: #000000;
  margin-bottom: 30px;
  @media (min-width: 769px) and (max-width: 1024px) {
    font-size: 28px;
    line-height: 42px;
    margin-bottom: 25px;
  }

  @media (max-width: 768px) {
    font-size: 24px;
    line-height: 36px;
    text-align: center;
    margin: 0 auto 25px;
    max-width: 360px;
  }
`;

const TextContent = styled.div`
  margin-bottom: 60px;

  &:last-child {
    margin-bottom: 0;
  }
  @media (min-width: 769px) and (max-width: 1024px) {
    margin-bottom: 50px;
  }

  @media (max-width: 768px) {
    margin-bottom: 40px;
  }
`;

const Paragraph = styled.p`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  letter-spacing: -0.02em;
  color: #000000;
  margin-bottom: 20px;

  &:last-child {
    margin-bottom: 0;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    font-size: 17px;
    line-height: 26px;
    margin-bottom: 18px;
  }

  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 24px;
    margin-bottom: 16px;
  }
`;

const List = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 24px 0;

  @media (min-width: 769px) and (max-width: 1024px) {
    margin: 20px 0;
  }

  @media (max-width: 768px) {
    margin: 16px 0;
  }
`;

const ListItem = styled.li`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  letter-spacing: -0.02em;
  color: #000000;
  margin-bottom: 16px;
  display: flex;
  align-items: flex-start;
  @media (min-width: 769px) and (max-width: 1024px) {
    font-size: 17px;
    line-height: 26px;
    margin-bottom: 14px;
  }

  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 24px;
    margin-bottom: 12px;
  }
`;

const Dash = styled.span`
  display: inline-block;
  margin-right: 10px;
  flex-shrink: 0;
  color: #1b2632;
  font-weight: 500;
`;

const ItemText = styled.span`
  flex: 1;
`;

export default function ElectricScooterAccidentInfoSection() {
  return (
    <SectionContainer>
      <ContentWrapper>
        <TextContent>
          <Question>Types of Injuries in Electric Scooter Accidents</Question>
          <Paragraph>
            Electric scooter accidents can result in a wide range of injuries,
            from minor cuts and bruises to severe, life-threatening trauma. The
            lack of protection for scooter riders makes them particularly
            vulnerable to serious injuries in the event of an accident. Some
            common injuries associated with electric scooter accidents include:
          </Paragraph>
          <List>
            <ListItem>
              <Dash>–</Dash>
              <ItemText>
                <strong>Head Injuries:</strong> Traumatic brain injuries,
                concussions, and skull fractures are common in electric scooter
                accidents, especially when riders don't wear helmets. These
                injuries can have long-lasting effects and may require extensive
                medical treatment.
              </ItemText>
            </ListItem>
            <ListItem>
              <Dash>–</Dash>
              <ItemText>
                <strong>Fractures and Broken Bones:</strong> The impact from
                falls or collisions can result in broken arms, wrists, legs, or
                ribs. Fractures often require surgical intervention and
                prolonged recovery periods.
              </ItemText>
            </ListItem>
            <ListItem>
              <Dash>–</Dash>
              <ItemText>
                <strong>Facial Injuries:</strong> Riders may suffer facial
                lacerations, dental injuries, or facial fractures from direct
                impact with the ground or objects during an accident.
              </ItemText>
            </ListItem>
            <ListItem>
              <Dash>–</Dash>
              <ItemText>
                <strong>Soft Tissue Injuries:</strong> Sprains, strains, and
                tears to ligaments, tendons, and muscles are common in electric
                scooter accidents, particularly when riders attempt to break
                their fall with their hands or arms.
              </ItemText>
            </ListItem>
            <ListItem>
              <Dash>–</Dash>
              <ItemText>
                <strong>Road Rash:</strong> When riders slide across pavement or
                concrete after falling from a scooter, they often suffer painful
                abrasions known as road rash. These injuries can become infected
                if not properly treated.
              </ItemText>
            </ListItem>
            <ListItem>
              <Dash>–</Dash>
              <ItemText>
                <strong>Spinal Cord Injuries:</strong> More severe accidents can
                result in spinal cord damage, which may lead to partial or
                complete paralysis and require lifelong medical care.
              </ItemText>
            </ListItem>
          </List>
          <Paragraph>
            If you've suffered any of these injuries in an electric scooter
            accident, it's crucial to seek both medical attention and legal
            counsel promptly to protect your health and your rights to
            compensation.
          </Paragraph>
        </TextContent>

        <TextContent>
          <Question>Electric Scooter Regulations in California</Question>
          <Paragraph>
            Understanding the laws and regulations governing electric scooters
            in California is essential for determining liability in accident
            cases. These regulations can vary by city or municipality, but there
            are some statewide laws that apply to all electric scooter riders:
          </Paragraph>
          <List>
            <ListItem>
              <Dash>–</Dash>
              <ItemText>
                <strong>Licensing Requirements:</strong> California law does not
                require scooter riders to have a driver's license, but riders
                must be at least 16 years old.
              </ItemText>
            </ListItem>
            <ListItem>
              <Dash>–</Dash>
              <ItemText>
                <strong>Helmet Requirements:</strong> As of January 2019, adults
                (18 and older) are not legally required to wear helmets while
                operating electric scooters, although it is strongly recommended
                for safety. Riders under 18 must wear properly fitted and
                fastened bicycle helmets.
              </ItemText>
            </ListItem>
            <ListItem>
              <Dash>–</Dash>
              <ItemText>
                <strong>Where Scooters Can Be Ridden:</strong> Electric scooters
                can be operated on roads with speed limits up to 25 mph. They
                can also be ridden on bike lanes and bikeways. Riding on
                sidewalks is generally prohibited unless permitted by local
                ordinance.
              </ItemText>
            </ListItem>
            <ListItem>
              <Dash>–</Dash>
              <ItemText>
                <strong>Speed Limits:</strong> Electric scooters in California
                are limited to a maximum speed of 15 mph.
              </ItemText>
            </ListItem>
            <ListItem>
              <Dash>–</Dash>
              <ItemText>
                <strong>Equipment Requirements:</strong> Electric scooters must
                be equipped with working brakes, lights for nighttime operation,
                and reflectors.
              </ItemText>
            </ListItem>
            <ListItem>
              <Dash>–</Dash>
              <ItemText>
                <strong>Passenger Restrictions:</strong> California law
                prohibits carrying passengers on electric scooters designed for
                a single rider.
              </ItemText>
            </ListItem>
            <ListItem>
              <Dash>–</Dash>
              <ItemText>
                <strong>Local Variations:</strong> Cities and municipalities may
                have additional regulations regarding electric scooter use,
                including restrictions on where scooters can be parked or
                operated, and whether rental companies can operate within city
                limits.
              </ItemText>
            </ListItem>
          </List>
          <Paragraph>
            Violations of these regulations can impact liability determinations
            in accident cases. Our attorneys stay current on all electric
            scooter laws and can help determine how they apply to your specific
            situation.
          </Paragraph>
        </TextContent>
      </ContentWrapper>
    </SectionContainer>
  );
}
