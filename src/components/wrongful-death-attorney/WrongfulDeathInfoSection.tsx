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

const NestedList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 10px 0 0 20px;
`;

const NestedListItem = styled.li`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 25px;
  letter-spacing: -0.02em;
  color: #000000;
  margin-bottom: 10px;
  display: flex;
  align-items: flex-start;

  @media (min-width: 769px) and (max-width: 1024px) {
    font-size: 16px;
    line-height: 24px;
    margin-bottom: 8px;
  }

  @media (max-width: 768px) {
    font-size: 15px;
    line-height: 22px;
    margin-bottom: 8px;
  }
`;

export default function WrongfulDeathInfoSection() {
  return (
    <SectionContainer>
      <ContentWrapper>
        <TextContent>
          <Question>Who can file A Wrongful Death Claim?</Question>
          <Paragraph>
            Under California law, only certain individuals are permitted to file
            a wrongful death claim. These include:
          </Paragraph>
          <List>
            <ListItem>
              <Dash>–</Dash>
              <ItemText>
                <strong>Surviving spouse or domestic partner:</strong> The
                spouse or registered domestic partner of the deceased person has
                the right to file a wrongful death claim.
              </ItemText>
            </ListItem>
            <ListItem>
              <Dash>–</Dash>
              <ItemText>
                <strong>Surviving children:</strong> The children of the
                deceased person, including adopted children, can file a wrongful
                death claim.
              </ItemText>
            </ListItem>
            <ListItem>
              <Dash>–</Dash>
              <ItemText>
                <strong>Dependents:</strong> Certain individuals who were
                financially dependent on the deceased may be able to file a
                wrongful death claim. This may include stepchildren or parents
                who were financially dependent on the deceased.
              </ItemText>
            </ListItem>
            <ListItem>
              <Dash>–</Dash>
              <ItemText>
                <strong>Personal representative:</strong> The personal
                representative of the deceased person's estate can file a
                wrongful death claim on behalf of the estate and the surviving
                heirs.
              </ItemText>
            </ListItem>
          </List>
          <Paragraph>
            If the decedent has no surviving spouse or children, then the claim
            can be brought by the persons who would be entitled to the property
            of the decedent by intestate succession.
          </Paragraph>
          <Paragraph>
            It's important to note that California law has specific rules
            regarding who can file a wrongful death claim and when. The statute
            of limitations for filing a wrongful death claim in California is
            generally two years from the date of death. However, there are
            exceptions to this rule, so it's advisable to consult with an
            attorney as soon as possible to ensure your claim is filed within
            the required timeframe.
          </Paragraph>
        </TextContent>

        <TextContent>
          <Question>Types Of Damages In Wrongful Death Cases</Question>
          <Paragraph>
            In California, there are several types of damages that can be
            recovered in a wrongful death case. These damages are intended to
            compensate the surviving family members for their financial and
            emotional losses resulting from the death of their loved one. The
            types of damages that can be recovered include:
          </Paragraph>
          <List>
            <ListItem>
              <Dash>–</Dash>
              <ItemText>
                <strong>Economic damages:</strong> These are damages that have a
                specific monetary value and can be calculated with relative
                accuracy. Economic damages in a wrongful death case may include:
                <NestedList>
                  <NestedListItem>
                    <Dash>-</Dash>
                    <ItemText>
                      Financial support that the deceased would have contributed
                      to the family during their expected lifetime
                    </ItemText>
                  </NestedListItem>
                  <NestedListItem>
                    <Dash>-</Dash>
                    <ItemText>
                      Loss of gifts or benefits that the survivors would have
                      expected to receive from the deceased
                    </ItemText>
                  </NestedListItem>
                  <NestedListItem>
                    <Dash>-</Dash>
                    <ItemText>Funeral and burial expenses</ItemText>
                  </NestedListItem>
                  <NestedListItem>
                    <Dash>-</Dash>
                    <ItemText>
                      The reasonable value of household services that the
                      deceased would have provided
                    </ItemText>
                  </NestedListItem>
                </NestedList>
              </ItemText>
            </ListItem>
            <ListItem>
              <Dash>–</Dash>
              <ItemText>
                <strong>Non-economic damages:</strong> These are damages that do
                not have a specific monetary value and are more subjective in
                nature. Non-economic damages in a wrongful death case may
                include:
                <NestedList>
                  <NestedListItem>
                    <Dash>-</Dash>
                    <ItemText>
                      Loss of love, companionship, comfort, care, assistance,
                      protection, affection, society, and moral support
                    </ItemText>
                  </NestedListItem>
                  <NestedListItem>
                    <Dash>-</Dash>
                    <ItemText>
                      Loss of enjoyment of sexual relations (for a surviving
                      spouse or domestic partner)
                    </ItemText>
                  </NestedListItem>
                  <NestedListItem>
                    <Dash>-</Dash>
                    <ItemText>
                      Loss of guidance and training that the deceased would have
                      provided to their children
                    </ItemText>
                  </NestedListItem>
                </NestedList>
              </ItemText>
            </ListItem>
          </List>
          <Paragraph>
            It's important to note that punitive damages, which are designed to
            punish the defendant for particularly egregious behavior, are
            generally not available in wrongful death cases in California.
            However, they may be available in a survival action, which is a
            separate legal claim that can be brought alongside a wrongful death
            claim.
          </Paragraph>
        </TextContent>
      </ContentWrapper>
    </SectionContainer>
  );
}
