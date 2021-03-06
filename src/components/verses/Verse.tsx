import React from 'react';
import Element from 'react-scroll/modules/components/Element';
import QuranTranslation from '../dls/QuranTranslation/QuranTranslation';
import VerseType from '../../../types/VerseType';
import VerseText from './VerseText';
import { Col } from 'styled-bootstrap-grid';
import styled from 'styled-components';

const VerseContainer = styled(Element)`
  padding: 2rem 1rem;
`;

type VerseProps = {
  verse: VerseType;
};

const Verse = ({ verse }: VerseProps) => (
  <Col sm={12}>
    <VerseContainer>
      <VerseText verse={verse} />
      {verse.translations?.map((translation) => (
        <QuranTranslation key={translation.id} translation={translation} />
      ))}
    </VerseContainer>
  </Col>
);

export default Verse;
