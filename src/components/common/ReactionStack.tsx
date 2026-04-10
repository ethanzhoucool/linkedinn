import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Svg, {Path, Circle as SvgCircle} from 'react-native-svg';
import {Colors} from '../../theme/colors';

interface ReactionCounts {
  like?: number;
  celebrate?: number;
  love?: number;
  insightful?: number;
}

interface Props {
  counts: ReactionCounts;
  totalLabel?: string;
}

type ReactionKey = 'like' | 'celebrate' | 'love' | 'insightful';

const REACTION_ORDER: ReactionKey[] = [
  'like',
  'celebrate',
  'love',
  'insightful',
];

const CIRCLE_SIZE = 18;

function LikeGlyph() {
  return (
    <Svg width={10} height={10} viewBox="0 0 24 24">
      <Path
        d="M7 10h3V4.5a1.5 1.5 0 0 1 3 0V10h4.8a1.2 1.2 0 0 1 1.2 1.35l-.9 6.3A1.8 1.8 0 0 1 16.32 19.2H9.6a1.8 1.8 0 0 1-1.8-1.8V11.6Z M3.5 10.5h2.2v8.4H3.5z"
        fill={Colors.white}
      />
    </Svg>
  );
}

function CelebrateGlyph() {
  return (
    <Svg width={10} height={10} viewBox="0 0 24 24">
      <Path
        d="M6 14l-2 6 6-2 8-8-4-4-8 8z M14 4l2 2 2-2-1-1-1 1-1-1z M19 9l1 1 2-1-1-1-1 1z"
        fill={Colors.white}
      />
    </Svg>
  );
}

function LoveGlyph() {
  return (
    <Svg width={10} height={10} viewBox="0 0 24 24">
      <Path
        d="M12 20s-7-4.35-7-10a4 4 0 0 1 7-2.65A4 4 0 0 1 19 10c0 5.65-7 10-7 10z"
        fill={Colors.white}
      />
    </Svg>
  );
}

function InsightfulGlyph() {
  return (
    <Svg width={10} height={10} viewBox="0 0 24 24">
      <Path
        d="M9 18h6v1.5a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 19.5V18z M12 2a7 7 0 0 0-4 12.74V16h8v-1.26A7 7 0 0 0 12 2z"
        fill={Colors.white}
      />
    </Svg>
  );
}

function GlyphForReaction({reaction}: {reaction: ReactionKey}) {
  switch (reaction) {
    case 'like':
      return <LikeGlyph />;
    case 'celebrate':
      return <CelebrateGlyph />;
    case 'love':
      return <LoveGlyph />;
    case 'insightful':
      return <InsightfulGlyph />;
  }
}

function colorForReaction(reaction: ReactionKey): string {
  switch (reaction) {
    case 'like':
      return Colors.like;
    case 'celebrate':
      return Colors.celebrate;
    case 'love':
      return Colors.love;
    case 'insightful':
      return Colors.insightful;
  }
}

export function ReactionStack({counts, totalLabel}: Props) {
  const activeReactions = REACTION_ORDER.filter(
    key => (counts[key] ?? 0) > 0,
  );

  if (activeReactions.length === 0) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.stack}>
        {activeReactions.map((reaction, index) => (
          <View
            key={reaction}
            style={[
              styles.circleWrap,
              {
                marginLeft: index === 0 ? 0 : -6,
                zIndex: activeReactions.length - index,
              },
            ]}>
            <Svg width={CIRCLE_SIZE} height={CIRCLE_SIZE} viewBox="0 0 20 20">
              <SvgCircle
                cx={10}
                cy={10}
                r={9}
                fill={colorForReaction(reaction)}
                stroke={Colors.white}
                strokeWidth={1}
              />
            </Svg>
            <View style={styles.glyph}>
              <GlyphForReaction reaction={reaction} />
            </View>
          </View>
        ))}
      </View>
      {totalLabel !== undefined && totalLabel.length > 0 && (
        <Text style={styles.label}>{totalLabel}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  stack: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  circleWrap: {
    width: CIRCLE_SIZE,
    height: CIRCLE_SIZE,
    alignItems: 'center',
    justifyContent: 'center',
  },
  glyph: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    marginLeft: 6,
    fontSize: 12,
    color: Colors.textTertiary,
  },
});
