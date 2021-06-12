import "quill/dist/quill.snow.css";

import React from "react";

import Box from "components/Box";
import Link from "components/Link";
import Button from "components/Button";
import Typography from "components/Typography";

import ArticlesContext from "contexts/ArticlesContext";

import Dots from "../LazyLoad/components/Fallback/components/Dots";

import {
  Section,
  TextWrapper,
  ContentWrapper,
} from "../WhatIDoSection/styled.components";
import {
  HTMLPreviewer,
  LoadingWrapper as CenterWrapper,
  BoxContentWrapper,
  BoxesWrapperReplaceFractions,
} from "./styled.components";
import { ButtonsWrapper } from "../HeroSection/styled.components";

const MySkillsAndExpertiseSection: React.FC = () => {
  const { articles, loading } = React.useContext(ArticlesContext);

  const [expand, toggleExpand] = React.useReducer((state) => !state, false);

  return (
    <Section id="articles">
      <ContentWrapper>
        <TextWrapper>
          <h5>Articles I have written recently</h5>
          <Typography variant="body" lead>
            Big fan of learnig new things, so when i solve a new problem i
            publish the solution.
          </Typography>
          <ButtonsWrapper>
            <Button
              as="a"
              href="https://arbaz5256.medium.com/"
              target="_blank"
              size="small"
              variation="outlined"
              prefix="medium"
            >
              My Medium Blog
            </Button>
          </ButtonsWrapper>
        </TextWrapper>

        {loading ? (
          <CenterWrapper>
            <Dots />
          </CenterWrapper>
        ) : (
          <>
            <BoxesWrapperReplaceFractions>
              {articles
                .slice(0, expand ? articles.length : 3)
                .map(({ title, content, link }, index) => (
                  <Box title={title} active={index === 0} key={title}>
                    <BoxContentWrapper>
                      <Typography variant="secondary">
                        <HTMLPreviewer readOnly value={content} />
                      </Typography>
                      <Link target="_blank" href={link}>
                        Read more...
                      </Link>
                    </BoxContentWrapper>
                  </Box>
                ))}
            </BoxesWrapperReplaceFractions>
            {!expand && (
              <CenterWrapper>
                <Link href="#" onClick={toggleExpand}>
                  List All Articles ({articles.length})
                </Link>
              </CenterWrapper>
            )}
          </>
        )}
      </ContentWrapper>
    </Section>
  );
};

export default React.memo(MySkillsAndExpertiseSection);
