import {APIGatewayEvent, APIGatewayProxyHandler, Context} from 'aws-lambda';
import 'source-map-support/register';
import { RacesService } from '../services';

export const getRaces: APIGatewayProxyHandler = async (event: APIGatewayEvent, _context: Context) => {
  const races = RacesService.getRaces();

  return {
    statusCode: 200,
    body: JSON.stringify({
      races: races,
      input: event
    }, null, 2),
  };
};
