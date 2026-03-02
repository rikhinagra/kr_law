"use client";
import styled from "styled-components";

const SectionContainer = styled.section`
  position: relative;
  width: 100%;
  background: #ffffff;
  overflow: hidden;

  @media (min-width: 1025px) {
    padding: 80px 0;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    padding: 60px 0;
  }

  @media (max-width: 768px) {
    padding: 40px 0;
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

export default function PedestrianAccidentInfoSection() {
  return (
    <SectionContainer>
      <ContentWrapper>
        <TextContent>
          <Question>California Pedestrian Laws and Rights</Question>
          <Paragraph>
            Understanding California's pedestrian laws is essential for
            determining liability in a pedestrian accident case. In California,
            pedestrians generally have the right-of-way in marked and unmarked
            crosswalks. However, pedestrians also have responsibilities, such as
            not suddenly leaving a curb and walking into the path of a vehicle
            that is so close it creates an immediate hazard.
          </Paragraph>
          <Paragraph>
            California Vehicle Code Section 21950 states that drivers must yield
            the right-of-way to pedestrians crossing the roadway within any
            marked or unmarked crosswalk at an intersection. This means that
            drivers must slow down or stop if necessary to allow pedestrians to
            safely cross the street.
          </Paragraph>
          <Paragraph>
            However, the same section also states that pedestrians must not
            suddenly leave a curb or other place of safety and walk or run into
            the path of a vehicle that is so close it constitutes an immediate
            hazard. Additionally, pedestrians must not unnecessarily stop or
            delay traffic while in a marked or unmarked crosswalk.
          </Paragraph>
          <Paragraph>
            California also follows a "comparative negligence" rule, which means
            that even if you were partially at fault for the accident, you may
            still be able to recover damages. Your compensation would be reduced
            by your percentage of fault. For example, if you were found to be
            20% at fault for the accident and your damages totaled $100,000, you
            would be able to recover $80,000.
          </Paragraph>
          <Paragraph>
            Our attorneys have a deep understanding of California pedestrian
            laws and can help determine the best legal strategy for your case
            based on the specific circumstances of your accident.
          </Paragraph>
        </TextContent>

        <TextContent>
          <Question>Compensation in Pedestrian Accident Cases</Question>
          <Paragraph>
            If you've been injured in a pedestrian accident due to someone
            else's negligence, you may be entitled to various types of
            compensation, including:
          </Paragraph>
          <List>
            <ListItem>
              <Dash>–</Dash>
              <ItemText>
                <strong>Medical Expenses:</strong> This includes current and
                future medical costs such as hospital bills, surgeries,
                medication, physical therapy, and rehabilitation.
              </ItemText>
            </ListItem>
            <ListItem>
              <Dash>–</Dash>
              <ItemText>
                <strong>Lost Wages:</strong> If your injuries prevent you from
                working, you may be able to recover compensation for lost income
                and loss of earning capacity.
              </ItemText>
            </ListItem>
            <ListItem>
              <Dash>–</Dash>
              <ItemText>
                <strong>Pain and Suffering:</strong> This compensates for the
                physical pain and emotional distress caused by your injuries.
              </ItemText>
            </ListItem>
            <ListItem>
              <Dash>–</Dash>
              <ItemText>
                <strong>Emotional Distress:</strong> This covers the
                psychological impact of the accident, such as anxiety,
                depression, and post-traumatic stress disorder.
              </ItemText>
            </ListItem>
            <ListItem>
              <Dash>–</Dash>
              <ItemText>
                <strong>Loss of Enjoyment of Life:</strong> If your injuries
                prevent you from engaging in activities you once enjoyed, you
                may be compensated for this loss.
              </ItemText>
            </ListItem>
            <ListItem>
              <Dash>–</Dash>
              <ItemText>
                <strong>Wrongful Death:</strong> If a pedestrian accident
                results in death, the victim's family may be entitled to
                compensation for funeral expenses, loss of financial support,
                and loss of companionship.
              </ItemText>
            </ListItem>
          </List>
          <Paragraph>
            Our attorneys can help you navigate these complex insurance issues
            and ensure that all applicable policies are utilized to provide you
            with maximum coverage for your damages and injuries.
          </Paragraph>
        </TextContent>
      </ContentWrapper>
    </SectionContainer>
  );
}
