import {
  Card,
  Image,
  ScrollArea,
  SimpleGrid,
  Space,
  Tabs,
  Text,
} from "@mantine/core";
import { format } from "date-fns";
import React, { useEffect, useMemo, useState } from "react";

import { MediaPreview } from "@/components/reviewMedia/MediaPreview";
import { RatingStars } from "@/components/ui/RatingStars";
import { Place } from "@/types/data";

import { getPlaceImages, GetPlaceImagesResponse } from "../api/getPlaceImages";

type Props = {
  place: Place;
};

export const PlaceCard: React.FC<Props> = ({ place }) => {
  const [images, setImages] = useState<GetPlaceImagesResponse[]>([]);
  const flattenedImages = useMemo(
    () => images.flatMap((image) => image.image_urls),
    [images],
  );

  useEffect(() => {
    getPlaceImages(place.id).then(setImages);
  }, [place.id]);

  return (
    <Card radius="md" padding="lg" withBorder flex={1}>
      {place.image_url && (
        <Card.Section>
          <Image
            src={place.image_url}
            alt={place.name}
            mah={200}
            mih={100}
            referrerPolicy="no-referrer"
          />
        </Card.Section>
      )}
      <Space h="sm" />
      <Text size="xl" fw="bold">
        {place.name}
      </Text>
      <Text size="sm" c="dimmed">
        {place.rating.toFixed(1)} <RatingStars rating={place.rating} /> (
        {place.user_rating_count})
      </Text>
      <Text size="sm" c="dimmed">
        {place.primary_type}
      </Text>
      <Text size="sm" c="dimmed">
        Last updated: {format(place.last_scraped, "d MMM yyyy, hh:mm a")}
      </Text>

      <Card.Section mt="xs">
        <Tabs defaultValue="Summary">
          <Tabs.List>
            <Tabs.Tab value="Summary">Summary</Tabs.Tab>
            <Tabs.Tab value="Gallery">Gallery</Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="Summary" p="md">
            <Text size="sm">{place.summary}</Text>
          </Tabs.Panel>

          <Tabs.Panel value="Gallery" p="md">
            <ScrollArea type="always" h={300}>
              <SimpleGrid cols={3}>
                {flattenedImages.map((image) => (
                  <MediaPreview
                    key={image}
                    mediaUrl={image}
                    height="100%"
                    width="100%"
                  />
                ))}
              </SimpleGrid>
            </ScrollArea>
          </Tabs.Panel>
        </Tabs>
      </Card.Section>
    </Card>
  );
};
