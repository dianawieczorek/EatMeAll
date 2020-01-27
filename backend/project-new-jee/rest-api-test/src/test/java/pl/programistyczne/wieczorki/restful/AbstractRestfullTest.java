package pl.programistyczne.wieczorki.restful;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;

import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.lang.reflect.Type;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import com.google.gson.JsonElement;
import org.apache.http.HttpResponse;
import org.apache.http.client.ClientProtocolException;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.HttpClientBuilder;
import org.apache.http.util.EntityUtils;

import com.google.common.collect.MapDifference;
import com.google.common.collect.Maps;
import com.google.gson.Gson;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import com.google.gson.reflect.TypeToken;

public abstract class AbstractRestfullTest {

    protected MapDifference<String, Object> preapreRestRequest(String aUrl, int aStatus, String aMockResnposeFileFile)
            throws IOException, ClientProtocolException, FileNotFoundException {
        HttpGet getRequest = new HttpGet(aUrl);
        HttpResponse httpResponse = HttpClientBuilder.create().build().execute(getRequest);

        assertEquals(aStatus, httpResponse.getStatusLine().getStatusCode());

        String content = EntityUtils.toString(httpResponse.getEntity());
        FileReader preparedFile = new FileReader(
                getClass().getClassLoader().getResource(aMockResnposeFileFile).getFile());

        JsonParser parser = new JsonParser();
        JsonObject expected = parser.parse(preparedFile).getAsJsonObject();
        JsonObject result = parser.parse(content).getAsJsonObject();

        Gson g = new Gson();
        Type mapType = new TypeToken<Map<String, Object>>() {
        }.getType();
        Map<String, Object> expectedMap = g.fromJson(expected, mapType);
        Map<String, Object> resultMap = g.fromJson(result, mapType);
        MapDifference<String, Object> ret = Maps.difference(expectedMap, resultMap);

        if (!ret.areEqual()) {
            System.out.println("--- RESULT ---");
            System.out.println(content);
            System.out.println("--- EXPECTED ---");
            System.out.println(expected);
            System.out.println("--- rows only in EXPECTED ---");
            System.out.println(ret.entriesOnlyOnLeft());
            System.out.println("--- rows only in RESULT ---");
            System.out.println(ret.entriesOnlyOnRight());
        }
        assertTrue(ret.areEqual());
        return ret;
    }
}
